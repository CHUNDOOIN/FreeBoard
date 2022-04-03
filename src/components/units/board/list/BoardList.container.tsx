import { useQuery, gql } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { Router, useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARD_COMMENTS } from "./BoardList.queries";
import { MouseEvent, MouseEventHandler } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  // 라우터
  const router = useRouter();

  // API 요청
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log("이건 data2?", data);

  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log("이건 data2", data2);

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
      refetch={refetch}
      data={data}
      data2={data2}
    ></BoardListUI>
  );
}
