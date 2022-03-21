import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Wrap,
  TitleText,
  InfoWrap,
  InfoWrapLeft,
  LeftWriter,
  LeftWriterInput,
  InfoWrapRight,
  RightPassword,
  RightPasswordInput,
  TitleWrap,
  TitleTitle,
  TitleInput,
  MainWrap,
  MainTitle,
  MainInput,
  AddressWrap,
  AddressTitle,
  ZipCodeWrap,
  ZipCode,
  ZipCodeSearch,
  AddressInput1,
  AddressInput2,
  YoutubeWrap,
  YoutubeWrapTitle,
  YoutubeWrapInput,
  ImageWrap,
  ImageTitle,
  ImageUploadWrap,
  ImageUpload,
  SetWrap,
  SetTitle,
  SetButton,
  SetLabel,
  RegisterWrap,
  RegisterButton,
} from "../../../styles/new_boards";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function NewBoardPage() {
  // 자바스크립트 작성
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [data, setData] = useState();
  const router = useRouter();

  const onClickSubmit = async () => {
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
      alert("게시글 등록!");
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }

    // console.log(result.data);
    // setData(result.data.createBoard.message);
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <Wrap>
      <TitleText>게시물 등록</TitleText>

      <InfoWrap>
        <InfoWrapLeft>
          <LeftWriter>작성자</LeftWriter>
          <LeftWriterInput
            onChange={onChangeWriter}
            type="text"
            placeholder="이름을 적어주세요."
          ></LeftWriterInput>
        </InfoWrapLeft>
        <InfoWrapRight>
          <RightPassword>비밀번호</RightPassword>
          <RightPasswordInput
            onChange={onChangePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></RightPasswordInput>
        </InfoWrapRight>
      </InfoWrap>

      <TitleWrap>
        <TitleTitle>제목</TitleTitle>
        <TitleInput
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 작성해주세요."
        ></TitleInput>
      </TitleWrap>

      <MainWrap>
        <MainTitle>내용</MainTitle>
        <MainInput
          onChange={onChangeContents}
          placeholder="내용을 작성해주세요."
        ></MainInput>
      </MainWrap>

      <AddressWrap>
        <AddressTitle>주소</AddressTitle>
        <ZipCodeWrap>
          <ZipCode placeholder="14338"></ZipCode>
          <ZipCodeSearch>우편번호 검색</ZipCodeSearch>
        </ZipCodeWrap>
        <AddressInput1></AddressInput1>
        <AddressInput2></AddressInput2>
      </AddressWrap>

      <YoutubeWrap>
        <YoutubeWrapTitle>유튜브</YoutubeWrapTitle>
        <YoutubeWrapInput
          type="text"
          placeholder="링크를 복사해주세요."
        ></YoutubeWrapInput>
      </YoutubeWrap>

      <ImageWrap>
        <ImageTitle>사진 첨부</ImageTitle>
        <ImageUploadWrap>
          <ImageUpload>
            +<br />
            Upload
          </ImageUpload>
          <ImageUpload>
            +<br />
            Upload
          </ImageUpload>
          <ImageUpload>
            +<br />
            Upload
          </ImageUpload>
        </ImageUploadWrap>
      </ImageWrap>

      <SetWrap>
        <SetTitle>메인 설정</SetTitle>
        <SetButton type="radio" name="gender" />
        <SetLabel>유튜브</SetLabel>
        <SetButton type="radio" name="gender" />
        <SetLabel>사진</SetLabel>
      </SetWrap>

      <RegisterWrap>
        <RegisterButton onClick={onClickSubmit}>등록하기</RegisterButton>
      </RegisterWrap>
    </Wrap>
  );

  // HTML 작성
}
