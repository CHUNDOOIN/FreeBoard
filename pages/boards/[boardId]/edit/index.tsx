// 수정 페이지 (등록 페이지와 구분을 위한 isEdit true)
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  return <BoardWrite isEdit={true} data={data}></BoardWrite>;
}
