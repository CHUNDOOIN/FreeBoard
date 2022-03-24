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

  const onClickMoveList = () => {
    console.log("리스트로 이동합니다.");
    router.push("/boards");
  };

  const onClickMoveEdit = () => {
    console.log("수정 페이지로 이동합니다.");
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
      // onClickMoveDelete={onClickMoveList}
      data={data}
    ></BoardDetailUI>
  );
}
