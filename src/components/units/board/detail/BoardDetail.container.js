import { useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const router = useRouter();
  console.log("이건 라우터", router);
  // 자바스크립트 작성

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  console.log("이건 데이타", data);

  const onClickMoveList = () => {
    console.log("리스트로 이동합니다.");
    router.push("/boards");
  };

  const onClickMoveEdit = () => {
    console.log("수정 페이지로 이동합니다.");
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    console.log("게시물 삭제!");
    alert("게시물 삭제!");
    router.push("/boards");
  };

  return (
    <BoardDetailUI
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      data={data}
    ></BoardDetailUI>
  );
}
