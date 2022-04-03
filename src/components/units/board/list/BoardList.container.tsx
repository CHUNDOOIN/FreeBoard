import { useQuery, gql } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { Router, useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent, MouseEventHandler } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  // 라우터
  const router = useRouter();

  // API 요청
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  console.log("데이터 나오니?", data);

  // 함수
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
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
