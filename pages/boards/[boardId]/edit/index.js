// 수정 페이지
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/write/BoardWrite.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={false} data={data}></BoardWrite>;
}
