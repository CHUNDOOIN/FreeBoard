import { useQuery, gql } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { Router, useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  console.log("데이터 나오니?", data);

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onClickMoveToBoardNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      data={data}
    ></BoardListUI>
  );
}