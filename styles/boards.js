import styled from "@emotion/styled";

// 페이지 전체 감싸주는 태그
export const Wrap = styled.div`
  width: 1200px;
  height: 1847px;
  margin: 100px auto;
  padding: 60px 100px 100px 100px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

// 타이틀 텍스트
export const TitleText = styled.div`
  width: 100%;

  font-size: 36px;
  font-weight: 700;
  text-align: center;

  color: #000000;
`;

// 작성자, 비밀번호 작성을 감싸주는 태그
export const InfoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 40px; // 타이틀과 간격
`;

// 작성자, 비밀번호 작성 왼쪽 부분
export const InfoWrapLeft = styled.div`
  width: 486px;

  padding-top: 40px;
`;

// 작성자, 비밀번호 작성 왼쪽 부분 작성자
export const LeftWriter = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 작성자, 비밀번호 작성 왼쪽 부분 작성자 입력
export const LeftWriterInput = styled.input`
  width: 100%;
  height: 52px;

  border: 1px solid #bdbdbd;
  padding-left: 16px;

  font-weight: 400;
  font-size: 16px;
`;

// 작성자, 비밀번호 작성오른쪽 부분
export const InfoWrapRight = styled.div`
  width: 486px;

  padding-top: 40px;
`;

// 작성자, 비밀번호 작성 오른쪽 부분 패스워드
export const RightPassword = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;
// 작성자, 비밀번호 작성 오른쪽 부분 패스워드 입력
export const RightPasswordInput = styled.input`
  width: 100%;
  height: 52px;

  border: 1px solid #bdbdbd;
  padding-left: 16px;

  font-weight: 400;
  font-size: 16px;
`;

// 제목 부분을 감싸주는 태그
export const TitleWrap = styled.div`
  width: 100%;

  padding-top: 40px;
`;

// 제목 부분
export const TitleTitle = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 제목 입력
export const TitleInput = styled.input`
  width: 100%;
  height: 52px;

  border: 1px solid #bdbdbd;
  padding-left: 16px;

  font-weight: 400;
  font-size: 16px;
`;

// 내용을 감싸주는 태그
export const MainWrap = styled.div`
  width: 100%;

  padding-top: 40px;
`;

// 내용 부분
export const MainTitle = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 내용 입력하는 부분
export const MainInput = styled.textarea`
  width: 100%;
  height: 480px;

  border: 1px solid #bdbdbd;
  padding-left: 16px;

  font-weight: 400;
  font-size: 16px;

  padding-left: 16px;
  padding-top: 14px;
`;

// 주소를 감싸주는 태그
export const AddressWrap = styled.div`
  width: 100%;

  padding-top: 40px;
`;

// 주소 부분
export const AddressTitle = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 주소 입력 검색 감싸주는 태그
export const ZipCodeWrap = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom: 16px;
`;

// 주소 입력
export const ZipCode = styled.input`
  width: 77px;
  height: 52px;

  border: 1px solid #bdbdbd;
  padding-left: 16px;
  margin-right: 16px;
`;

// 주소 검색창
export const ZipCodeSearch = styled.button`
  width: 124px;
  height: 52px;

  background: #000000;
  color: #ffffff;
`;

// 주소 입력 위칸
export const AddressInput1 = styled.input`
  width: 100%;
  height: 52px;

  padding-left: 16px;
  border: 1px solid #bdbdbd;

  margin-bottom: 16px;
`;

// 주소 입력 아래칸
export const AddressInput2 = styled.input`
  width: 100%;
  height: 52px;

  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

// 유튜뷰 감싸는 부분
export const YoutubeWrap = styled.div`
  width: 100%;

  padding-top: 40px;
`;

// 유튜브 제목 부분
export const YoutubeWrapTitle = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 유튜브 인풋
export const YoutubeWrapInput = styled.input`
  width: 100%;
  height: 52px;

  border: 1px solid #bdbdbd;
  padding-left: 16px;

  font-weight: 400;
  font-size: 16px;
`;

// 사진 첨부 부분을 감싸주는 태그
export const ImageWrap = styled.div`
  width: 100%;

  padding-top: 40px;
`;

// 사진 첨부 글씨
export const ImageTitle = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 업로드 부분 감싸주는 태그
export const ImageUploadWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

// 업로드 버튼
export const ImageUpload = styled.button`
  width: 78px;
  height: 78px;

  padding-top: 16px;

  background-color: #bdbdbd;
  margin-right: 24px;

  border: none;
  cursor: pointer;
`;

// 메인 설정 감싸주는 태그
export const SetWrap = styled.div`
  width: 100%;

  padding-top: 40px;
`;

//메인 설정 글씨
export const SetTitle = styled.div`
  width: 100%;

  padding-bottom: 16px;
`;

// 버튼1, 2
export const SetButton = styled.input`
  cursor: pointer;
`;

// 라벨1, 2
export const SetLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;
`;

export const RegisterWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-top: 80px;
`;

export const RegisterButton = styled.button`
  width: 179px;
  height: 52px;
  background: #ffd600;

  border: none;
  cursor: pointer;
`;
