import { useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
} from "./BoardDetail.queries";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // console.log("이건 라우터", router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  // console.log("이건 데이타", data);

  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  // console.log("이건 데이타2", data2);

  const onClickMoveList = () => {
    router.push("/boards");
  };

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    alert("게시물 삭제!");
    router.push("/boards");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const onClickComment = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: Number(rating),
          },
          boardId: router.query.boardId,
        },
        refetchQueries: () => [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      alert("댓글 등록 성공 하였습니다!");
    } catch (error: any) {
      alert(error.message);
      alert("댓글 등록 실패 하였습니다!");
    }
  };

  return (
    <BoardDetailUI
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onClickDelete={onClickDelete}
      onClickComment={onClickComment}
      data={data}
      data2={data2}
    ></BoardDetailUI>
  );
}
