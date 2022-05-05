import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { recentItemList } from "../../../commons/store";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS, TOGGLE_USEDITEM_PICK } from "./MarketList.queries";

export default function MarketList() {
  const [, setDeleteList] = useRecoilState(recentItemList);
  const [a, setA] = useState<string[]>([]);
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

  const onClickMoveToMarketDetail =
    (aaa: any) => (event: MouseEvent<HTMLDivElement>) => {
      if (event.target instanceof Element)
        router.push(`/markets/${event.target.id}`);

      console.log(aaa);
      setDeleteList((prev: boolean) => !prev);
      const todayWatchList = JSON.parse(
        localStorage.getItem("todayWatchList") || "[]"
      );

      const temp = todayWatchList.filter(
        (basketEl: any) => basketEl._id === aaa._id
      );
      if (temp.length === 1) {
        return 200;
      }
      const { __typename, ...newAAA } = aaa;
      todayWatchList.push(newAAA);
      localStorage.setItem("todayWatchList", JSON.stringify(todayWatchList));
      setA([...a, (event.target as HTMLButtonElement).id]);
      console.log(a);
    };
  // const onClickMoveToMarketDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   if (event.target instanceof Element)
  //     router.push(`/markets/${event.target.id}`);

  // };

  // const onClickBasket = (aaa: any) => (event: any) => {
  //   console.log(aaa);
  //   setDeleteList((prev: boolean) => !prev);
  //   const todayWatchList = JSON.parse(
  //     localStorage.getItem("todayWatchList") || "[]"
  //   );

  //   const temp = todayWatchList.filter(
  //     (basketEl: any) => basketEl._id === aaa._id
  //   );
  //   if (temp.length === 1) {
  //     return 200;
  //   }
  //   const { __typename, ...newAAA } = aaa;
  //   todayWatchList.push(newAAA);
  //   localStorage.setItem("todayWatchList", JSON.stringify(todayWatchList));
  //   setA([...a, (event.target as HTMLButtonElement).id]);
  //   console.log(a);
  // };

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

  const onClickToday = (aaa: any) => (event: any) => {
    console.log(aaa);
    setDeleteList((prev: boolean) => !prev);
    const todayWatchList = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );

    const temp = todayWatchList.filter(
      (basketEl: any) => basketEl._id === aaa._id
    );
    if (temp.length === 1) {
      return 200;
    }
    const { __typename, ...newAAA } = aaa;
    todayWatchList.push(newAAA);
    localStorage.setItem("todayWatchList", JSON.stringify(todayWatchList));
    setA([...a, (event.target as HTMLButtonElement).id]);
    console.log(a);
  };

  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      onLoadMore={onLoadMore}
      onClickMoveToMarketNew={onClickMoveToMarketNew}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      onClickPicked={onClickPicked}
      onClickToday={onClickToday}
    />
  );
}
