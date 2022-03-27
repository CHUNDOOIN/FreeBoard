import styled from "@emotion/styled";

// 페이지 전체 감싸주는 태그
export const Wrap = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

export const InWrap = styled.div`
  padding: 60px 102px 100px 102px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

// 상단 페이지 감싸주는 태그
export const HeaderWrap = styled.div`
  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;

  flex-direction: row;
`;

// 상단 왼쪽 페이지 감싸주는 태그

export const HeaderLeft = styled.div`
  width: 498px;
  padding-top: 60px;

  display: flex;

  flex-direction: row;
  justify-content: flex-start; ;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding-left: 12px;
`;

export const LeftImg = styled.img`
  width: 46.67px;
  height: 46.67px;

  margin-left: 4.67px;
  margin-right: 4.67px;
`;

export const LeftTitle = styled.div`
  width: 100%;

  font-weight: 500;
  font-size: 24px;
`;

export const LeftDate = styled.div`
  width: 100%;

  font-weight: 400;
  font-size: 16px;

  color: #828282;
`;

export const HeaderRight = styled.div`
  width: 498px;

  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const RightTitle = styled.div`
  width: 376px;
  height: 64px;

  background-color: #c4c4c4;
  margin-right: 16px;

  border: 1px solid #ffd600;

  text-align: right;

  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  padding-top: 8px;
`;

export const RightTry = styled.div`
  width: 12px;
  height: 8px;

  background-color: #c4c4c4;
  border: 1px solid #ffd600;
  margin-right: 16px;
`;

export const RightIconWrap = styled.div`
  width: 100%;

  display: flex;

  flex-direction: row;

  justify-content: flex-end;
  align-items: center;

  margin-right: 6.67px; ;
`;

export const RightLinkIcon = styled.img`
  margin-right: 29.33px;
`;
export const RightMapIcon = styled.img``;

// 메인 페이지 감싸주는 태그
export const MainWrap = styled.div`
  width: 100%;

  border-top: 1px solid #bdbdbd;

  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.div`
  width: 100%;
  margin-top: 80px;

  font-weight: 700;
  font-size: 36px;

  padding-bottom: 40px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 480px;

  background-color: aliceblue;
  margin-bottom: 40px;
`;

export const MainContents = styled.div`
  width: 100%;
  height: 96px;

  font-weight: 400;
  font-size: 16px;
`;

// 유튜브 페이지 감싸주는 태그
export const YoutubeWrap = styled.div`
  width: 100%;
  /* background-color: yellow; */

  display: flex;

  flex-direction: row;
  justify-content: center;

  margin-top: 120px;
`;

// 유튜브 페이지 감싸주는 태그
export const Youtube = styled.img`
  width: 526px;
  height: 280px;

  /* background-color: red; */
`;

// 하단 페이지 감싸주는 태그
export const BottomWrap = styled.div`
  width: 100%;

  padding-top: 160px;

  display: flex;

  flex-direction: row;
  justify-content: center;

  margin-bottom: 20px;
`;

export const BottomLeft = styled.div`
  width: 40px;
  height: 51px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 20px;
`;

export const LeftUp = styled.img`
  width: 20px;
  height: 18px;
`;

export const LeftNumber = styled.div`
  width: 100%;

  font-weight: 400;
  font-size: 18px;

  color: #ffd600;

  text-align: center;
`;

export const BottomRight = styled.div`
  width: 40px;
  height: 51px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  margin-left: 20px;
`;

export const RightDown = styled.img`
  width: 20px;
  height: 18px;
`;

export const RightNumber = styled.div`
  width: 100%;

  font-weight: 400;
  font-size: 18px;

  color: #828282;

  text-align: center;
`;

export const OutWrap = styled.div``;

export const ButtonWarp = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;

  font-weight: 500;
  font-size: 16px;

  color: #828282;
  border: 1px solid #bdbdbd;

  margin: 80px 12px 80px 12px;

  cursor: pointer;
  :hover {
    background-color: #ffd600;
    color: #000000;
  }
`;

// 댓글 부분 시작
export const CommentsWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd; */

  padding-top: 40px;
  padding-bottom: 20px;

  border-top: 1px solid #bdbdbd; ;
`;

export const WriterWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding-bottom: 40px;
`;

export const WriterIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 14px;
`;

export const Writer = styled.div`
  width: 100%;

  font-weight: 500;
  font-size: 18px;
`;

// 댓글 작성자, 패스워드, 레이팅
export const WriterInputWrap = styled.div`
  width: 100%;

  display: flex;

  flex-direction: row;
  align-items: center;

  padding-bottom: 20px;
`;

export const WriterInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;

  font-weight: 500;
  font-size: 16px;

  color: #828282;
  padding-left: 20px;
  margin-right: 24px;
`;

export const PasswordInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;

  font-weight: 500;
  font-size: 16px;

  color: #828282;
  padding-left: 20px;
  margin-right: 24px;
`;

export const RatingInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;

  font-weight: 500;
  font-size: 16px;

  color: #828282;
  padding-left: 20px;
  margin-right: 24px;
`;

export const Rating = styled.img`
  width: 20px;
  height: 20px;

  margin: 0px 2px 0px 2px;
`;

export const ContentsInputWrap = styled.div`
  width: 100%;
  height: 161px;

  /* background-color: blue; */
  border: 1px solid #bdbdbd;
  display: flex;

  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputUpWrap = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;

  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;

  border: none;
`;

// 코멘트 작성 아래쪽

export const InputDownWrap = styled.div`
  width: 100%;
  height: 52px;

  border-top: 1px solid #f2f2f2;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentsNumber = styled.div`
  width: 100%;

  margin: 14px 20px 14px 20px;

  color: #bdbdbd;
`;

export const ContentsButton = styled.button`
  width: 91px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  background: #000000;
  color: #ffffff;
`;

// export const EditerInputWrap = styled.div`
//   width: 100%;
// `;

// export const EditContentsInputWrap = styled.div`
//   width: 100%;
// `;

export const ListWrap = styled.div`
  width: 100%;
  padding-top: 20px;

  border-bottom: 1px solid #bdbdbd;
  /* 
  background-color: yellow; */
`;

export const ListUpWrap = styled.div`
  width: 100%;

  display: flex;

  flex-direction: row;

  margin-bottom: 20px;
`;

// 리스트 유저 사진
export const ListUpLeft = styled.img`
  width: 40px;
  height: 40px;

  margin-right: 16px;
`;

// 리스트 업 오른쪽 부분
export const ListUpRight = styled.div`
  width: 100%;
  /* background-color: green; */
`;

export const RightUpWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const UpWrapLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpWrapRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CommentEditIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
`;
export const CommentCancelIcon = styled.img`
  width: 14px;
  height: 14px;

  margin-right: 5px;
`;

export const RightUpName = styled.div`
  /* width: 100%; */

  font-weight: 500;
  font-size: 16px;

  color: #000000;

  margin-right: 16px;
  margin-bottom: 4px;
`;

export const RightDownWrap = styled.div`
  width: 100%;
`;

export const RightDownContents = styled.div`
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;

  margin-bottom: 20px;
`;

export const RightDownDownDate = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;

  color: #bdbdbd;
`;
