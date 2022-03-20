import styled from "@emotion/styled";

// 페이지 전체 감싸주는 태그
export const Wrap = styled.div`
  width: 1200px;
  margin: 100px auto;
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

  background-color: red;
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
