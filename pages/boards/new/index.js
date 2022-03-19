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
} from "../../../styles/boards";

export default function Boards() {
  // 자바스크립트 작성

  return (
    <Wrap>
      <TitleText>게시물 등록</TitleText>

      <InfoWrap>
        <InfoWrapLeft>
          <LeftWriter>작성자</LeftWriter>
          <LeftWriterInput
            type="text"
            placeholder="이름을 적어주세요."
          ></LeftWriterInput>
        </InfoWrapLeft>
        <InfoWrapRight>
          <RightPassword>비밀번호</RightPassword>
          <RightPasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></RightPasswordInput>
        </InfoWrapRight>
      </InfoWrap>

      <TitleWrap>
        <TitleTitle>제목</TitleTitle>
        <TitleInput type="text" placeholder="제목을 작성해주세요."></TitleInput>
      </TitleWrap>

      <MainWrap>
        <MainTitle>내용</MainTitle>
        <MainInput placeholder="내용을 작성해주세요."></MainInput>
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
        <RegisterButton>등록하기</RegisterButton>
      </RegisterWrap>
    </Wrap>
  );

  // HTML 작성
}
