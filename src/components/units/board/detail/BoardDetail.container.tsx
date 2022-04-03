import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  // 라우터
  const router = useRouter();
  console.log("이건 router", router);

  // State 선언
  const [value, setValue] = useState(5);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");

  // API 요청
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  console.log("이건 data", data);

  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log("이건 data2", data2);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // 작성중...
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  // 함수 부분
  const handleChange = (value: number) => {
    setValue(value);
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    deleteBoard({
      variables: { boardId: String(router.query.boardId) },
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
          boardId: String(router.query.boardId),
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
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const onClickBoardDislike = () => {
    dislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
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
      onClickBoardLike={onClickBoardLike}
      onClickBoardDislike={onClickBoardDislike}
      handleChange={handleChange}
      value={value}
      data={data}
      data2={data2}
      // writer={writer}
      // password={password}
      // contents={contents}
      // boardId={String(router.query.boardId)}
      // youtubeUrl={data?.fetchBoard.youtubeUrl}
    ></BoardDetailUI>
  );
}
