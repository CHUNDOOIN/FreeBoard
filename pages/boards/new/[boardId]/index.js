import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      user {
        _id
        email
        name
        picture
        userPoint {
          amount
        }
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function DetailBoardPage() {
  const router = useRouter();
  console.log(router);
  // 자바스크립트 작성

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);

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
        <MainTitle>
          {data === data?.fetchBoard.title
            ? " loading... "
            : data?.fetchBoard.title}
        </MainTitle>
        <MainImg src={"/detail_boards/main.png"}></MainImg>
        <MainContents>
          {data === data?.fetchBoard.contents
            ? " loading... "
            : data?.fetchBoard.contents}
        </MainContents>
      </MainWrap>

      <YoutubeWrap>
        <Youtube src={"/detail_boards/video.png"}></Youtube>
      </YoutubeWrap>

      <BottomWrap>
        <BottomLeft>
          <LeftUp src={"/detail_boards/up.png"}></LeftUp>
          <LeftNumber>
            {data === data?.fetchBoard.likeCount
              ? " loading... "
              : data?.fetchBoard.likeCount}
          </LeftNumber>
        </BottomLeft>
        <BottomRight>
          <RightDown src={"/detail_boards/down.png"}></RightDown>
          <RightNumber>
            {data === data?.fetchBoard.dislikeCount
              ? " loading... "
              : data?.fetchBoard.dislikeCount}
          </RightNumber>
        </BottomRight>
      </BottomWrap>
    </Wrap>
  );

  // HTML 작성
}
