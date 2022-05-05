import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recentItemList } from "../../commons/store";
import RecentItemUI from "./RecentItem.presenter";

export default function RecentItem() {
  const [todayWatchList, setTodayWatchList] = useState([]);
  const [deleteList, setDeleteList] = useRecoilState(recentItemList);

  useEffect(() => {
    const todayWatchList = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );
    setTodayWatchList(todayWatchList);
  }, [deleteList]);

  const onClickDeleteList = (bbb: any) => () => {
    const deleteBaskets = JSON.parse(
      localStorage.getItem("todayWatchList") || "[]"
    );
    const deleteTemp = deleteBaskets.filter((el: any) => bbb._id !== el._id);
    console.log(deleteTemp);
    localStorage.setItem("todayWatchList", JSON.stringify(deleteTemp));
    setDeleteList((prev) => !prev);
  };

  return (
    <RecentItemUI
      todayWatchList={todayWatchList}
      onClickDeleteList={onClickDeleteList}
    />
  );
}
