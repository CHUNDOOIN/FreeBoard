import { useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();

  const [value, setValue] = useState(5);
  const handleChange = (value: number) => {
    setValue(value);
  };

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  // 수정 필요.. Pick 쪽?
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log("이건 라우터", router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log("이건 데이타", data);

  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log("이건 데이타2", data2);

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
    Modal.success({
      content: "게시물 삭제!",
    });
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
            rating: Number(value),
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "댓글 등록 성공 하였습니다!",
      });
    } catch (error: any) {
      Modal.error({
        content: "게시물 등록 실패!",
      });
    }
  };

  const onClickBoardLike = () => {
    likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickBoardDislike = () => {
    dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  // const onClickEditComment = async (event: MouseEvent<HTMLButtonElement>) => {
  //   try {
  //     await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput: {
  //           contents: contents,
  //           rating: rating,
  //         },
  //         password: password,
  //         boardCommentId: boardCommentId,
  //       },
  //     });
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  // };

  // const onClickCommentDelete = (event: MouseEvent<HTMLButtonElement>) => {
  //   deleteBoardComment({
  //     variables: {
  //       deleteBoardComment: {
  //         boardCommentId: boardCommentId,
  //         password: password,
  //       },
  //     },
  //   });
  // };

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
      onClickBoardLike={onClickBoardLike}
      onClickBoardDislike={onClickBoardDislike}
      handleChange={handleChange}
      value={value}
      // onClickEditComment={onClickEditComment}
      // onClickEditInput={onClickEditInput}
      // onClickCommentDelete={onClickCommentDelete}
      // isEdit={isEdit}

      data={data}
      data2={data2}
      writer={writer}
      password={password}
      contents={contents}
    ></BoardDetailUI>
  );
}
