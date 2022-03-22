import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  console.log(router);
  // 자바스크립트 작성

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  console.log(data);

  return <BoardDetailUI data={data}></BoardDetailUI>;
}
