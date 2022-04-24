import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data);
  console.log(router);

  const onClickMoveToMarketNew = () => {
    router.push("/markets/new");
  };

  const onClickMoveToMarketDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/markets/${event.target.id}`);
  };

  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      onClickMoveToMarketNew={onClickMoveToMarketNew}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
    />
  );
}
