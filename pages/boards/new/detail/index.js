import {
  Wrap,
  HeaderWrap,
  HeaderLeft,
  LeftImg,
  LeftWrap,
  LeftTitle,
  LeftDate,
  HeaderRight,
  RightTitle,
  RightTry,
  RightIconWrap,
  RightLinkIcon,
  RightMapIcon,
  MainWrap,
  YoutubeWrap,
  Youtube,
  MainTitle,
  MainImg,
  MainContents,
  BottomWrap,
  BottomLeft,
  LeftUp,
  LeftNumber,
  BottomRight,
  RightDown,
  RightNumber,
} from "../../../../styles/detail_board";

export default function DetailBoardPage() {
  // 자바스크립트 작성

  return (
    <Wrap>
      <HeaderWrap>
        <HeaderLeft>
          <LeftImg src={"/detail_boards/user.png"}></LeftImg>
          <LeftWrap>
            <LeftTitle>천두인</LeftTitle>
            <LeftDate>Date : 2021.02.18</LeftDate>
          </LeftWrap>
        </HeaderLeft>
        <HeaderRight>
          <RightTitle>
            서울특별시 영등포구 양산로 200 <br></br>
            (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
          </RightTitle>
          <RightTry></RightTry>
          <RightIconWrap>
            <RightLinkIcon src={"/detail_boards/link.png"}></RightLinkIcon>
            <RightMapIcon src={"/detail_boards/map.png"}></RightMapIcon>
          </RightIconWrap>
        </HeaderRight>
      </HeaderWrap>

      <MainWrap>
        <MainTitle>게시글 제목입니다.</MainTitle>
        <MainImg src={"/detail_boards/main.png"}></MainImg>
        <MainContents>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </MainContents>
      </MainWrap>

      <YoutubeWrap>
        <Youtube src={"/detail_boards/video.png"}></Youtube>
      </YoutubeWrap>

      <BottomWrap>
        <BottomLeft>
          <LeftUp src={"/detail_boards/up.png"}></LeftUp>
          <LeftNumber>1920</LeftNumber>
        </BottomLeft>
        <BottomRight>
          <RightDown src={"/detail_boards/down.png"}></RightDown>
          <RightNumber>1920</RightNumber>
        </BottomRight>
      </BottomWrap>
    </Wrap>
  );

  // HTML 작성
}
