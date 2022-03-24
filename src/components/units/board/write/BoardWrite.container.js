import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [data, setData] = useState();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickEdit = async () => {
    try {
      // const myVariables = { boardId: router.query.boardId };

      // if (writer !== "") {
      //   myVariables.writer = writer;
      // }
      // if (title !== "") {
      //   myVariables.title = title;
      // }
      // if (contents !== "") {
      //   myVariables.contents = contents;
      // }

      await updateBoard({
        variables: {
          updateBoardInput: {
            title: title,
            contents: contents,
          },
          boardId: router.query.boardId,
          password: password,
        },
      });
      alert("게시글을 수정 하였습니다!");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        // console.log(result.data.createBoard._id);
        alert("게시글을 등록 하였습니다!");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
        alert("게시글을 등록 실패 하였습니다!");
      }
    }
    // console.log(result.data);
    // setData(result.data.createBoard.message);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit} // 수정하기 버튼
      isActive={isActive}
      isEdit={props.isEdit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      data={props.data}
    ></BoardWriteUI>
  );
}
