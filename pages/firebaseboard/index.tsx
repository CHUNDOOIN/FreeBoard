import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import styled from "@emotion/styled";
import { firebaseApp } from "../_app";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const ListWrapper = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
`;

const Col = styled.div`
  width: 100px;
  text-align: center;
`;

// const Wr

export default function FireBasePage() {
  // 라우터
  // const router = useRouter();
  // console.log(router);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // 파이어 베이스 데이타는 배열로..
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    // 파이어베이스에 데이저 한줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: writer,
      title: title,
      contents: contents,
    });
    Modal.success({
      content: "게시글 작성 완료",
    });
  };

  const onClickFetch = async () => {
    // 파이어베이스에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const boards = result.docs.map((el) => el.data());
    setDataBoards(boards);
    // 게시글 조회
    console.log(boards);
  };

  return (
    <Wrapper>
      <div>두인에게 한마디 하자</div>
      <br></br>
      <div>작성자</div>
      <Input type="text" onChange={onChangeWriter} />
      <div>제목</div>
      <Input type="text" onChange={onChangeTitle} />
      <div>내용</div>
      <Input type="text" onChange={onChangeContents} />
      <br></br>
      <button onClick={onClickSubmit}>작성완료</button>
      <br></br>
      <button onClick={onClickFetch}> 방명록 조회하기</button>
      <br></br>
      <ListWrapper>
        <Row>
          <Col>번호</Col>
          <Col>작성자</Col>
          <Col>제목</Col>
          <Col>내용</Col>
        </Row>
        {dataBoards?.map((el, index) => (
          <Row key={index}>
            <Col>{index + 1}</Col>
            <Col>{el.writer}</Col>
            <Col>{el.title}</Col>
            <Col>{el.contents}</Col>
          </Row>
        ))}
      </ListWrapper>
    </Wrapper>
  );
}
