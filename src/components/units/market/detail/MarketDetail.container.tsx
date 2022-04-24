import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import { FETCH_USED_ITEM } from "./MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";

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

  console.log("데이타", data);

  const onClickMoveToMarketList = () => {
    router.push("/markets");
  };

  const onClickMoveToMarketEdit = () => {
    router.push(`/markets/${router.query.marketId}/edit`);
  };

  // const onClickLike = () => {
  //   likeBoard({
  //     variables: { boardId: String(router.query.boardId) },
  //     refetchQueries: [
  //       { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
  //     ],
  //   });
  // };

  // const onClickDislike = () => {
  //   dislikeBoard({
  //     variables: { boardId: String(router.query.boardId) },
  //     refetchQueries: [
  //       { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
  //     ],
  //   });
  // };

  // const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
  //   deleteBoard({
  //     variables: { boardId: String(router.query.boardId) },
  //   });
  //   Modal.success({
  //     content: "게시물 삭제 완료!",
  //   });
  //   router.push("/boards");
  // };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
    />
  );
}
