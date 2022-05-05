import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";

import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import { DELETE_USEDITEM, FETCH_USED_ITEM } from "./MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { Modal } from "antd";

export default function MarketDetail() {
  const router = useRouter();
  // const [likeBoard] = useMutation<
  //   Pick<IMutation, "likeBoard">,
  //   IMutationLikeBoardArgs
  // >(LIKE_BOARD);

  // const [dislikeBoard] = useMutation<
  //   Pick<IMutation, "dislikeBoard">,
  //   IMutationDislikeBoardArgs
  // >(DISLIKE_BOARD);

  // const [deleteBoard] = useMutation<
  //   Pick<IMutation, "deleteBoard">,
  //   IMutationDeleteBoardArgs
  // >(DELETE_BOARD);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  console.log("데이타", data);

  const onClickMoveToMarketList = () => {
    router.push("/markets");
  };

  const onClickMoveToMarketEdit = () => {
    router.push(`/markets/${router.query.marketId}/edit`);
  };

  const onClickDelete = (event: any) => {
    try {
      deleteUseditem({
        variables: { useditemId: String(router.query.marketId) },
      });
      Modal.success({
        content: "게시물 삭제 완료!",
      });
      router.push(`/markets`);
    } catch (error) {
      Modal.error({
        content: "게시물 삭제 권한이 없어요!!",
      });
    }
  };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      onClickDelete={onClickDelete}
    />
  );
}
