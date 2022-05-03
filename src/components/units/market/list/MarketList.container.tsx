import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS, TOGGLE_USEDITEM_PICK } from "./MarketList.queries";

export default function MarketList() {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  console.log(data);
  console.log(router);

  const onClickMoveToMarketNew = () => {
    router.push("/markets/new");
  };

  const onClickMoveToMarketDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/markets/${event.target.id}`);
  };

  const onClickPicked = async (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      try {
        await toggleUseditemPick({
          variables: { useditemId: event.target.id },
        });
        refetch();
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      onLoadMore={onLoadMore}
      onClickMoveToMarketNew={onClickMoveToMarketNew}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      onClickPicked={onClickPicked}
    />
  );
}
