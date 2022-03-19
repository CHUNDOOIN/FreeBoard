import {
  Wrap,
  Title_text,
  Info,
  Info_title,
  Info_left,
  Info_name,
  Info_right,
  Info_password,
  Title,
  Title_title,
  Title_input,
  Main,
  Main_title,
  Main_in,
  Address,
  Youtube,
  Photo,
  Setting,
  Join,
} from "../../../styles/boards";

export default function Boards() {
  // 자바스크립트 작성

  return (
    <Wrap>
      <Title_text>게시물 등록</Title_text>
      <Info_title>
        <Info_name>작성자</Info_name>
        <Info_password>비밀번호</Info_password>
      </Info_title>
      <Info>
        <Info_left type="text" placeholder="이름을 적어주세요."></Info_left>
        <Info_right
          type="password"
          placeholder="비밀번호를 입력해주세요."
        ></Info_right>
      </Info>
      <Title>
        <Title_title>제목</Title_title>
        <Title_input
          type="text"
          placeholder="제목을 작성해주세요."
        ></Title_input>
      </Title>
      <Main>
        <Main_title>내용</Main_title>
        <Main_in type="text" placeholder="내용을 작성해주세요."></Main_in>
      </Main>
      <Address></Address>
      <Youtube></Youtube>
      <Photo></Photo>
      <Setting></Setting>
      <Join></Join>
    </Wrap>
  );

  // HTML 작성
}
