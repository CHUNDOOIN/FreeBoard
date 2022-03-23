import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrap>
      <S.HeaderWrap>
        <S.HeaderLeft>
          <S.LeftImg src={"/detail_boards/user.png"}></S.LeftImg>
          <S.LeftWrap>
            <S.LeftTitle>{props.data?.fetchBoard.writer}</S.LeftTitle>
            <S.LeftDate>
              {props.data?.fetchBoard.updatedAt.slice(0, 10)}
            </S.LeftDate>
          </S.LeftWrap>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.RightTitle>
            서울특별시 영등포구 양산로 200 <br></br>
            (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
          </S.RightTitle>
          <S.RightTry></S.RightTry>
          <S.RightIconWrap>
            <S.RightLinkIcon src={"/detail_boards/link.png"}></S.RightLinkIcon>
            <S.RightMapIcon src={"/detail_boards/map.png"}></S.RightMapIcon>
          </S.RightIconWrap>
        </S.HeaderRight>
      </S.HeaderWrap>

      <S.MainWrap>
        <S.MainTitle>{props.data?.fetchBoard.title}</S.MainTitle>
        <S.MainImg src={[props.data?.fetchBoard.title]}></S.MainImg>
        <S.MainContents>{props.data?.fetchBoard.contents}</S.MainContents>
      </S.MainWrap>

      <S.YoutubeWrap>
        <S.Youtube src={"/detail_boards/video.png"}></S.Youtube>
      </S.YoutubeWrap>

      <S.BottomWrap>
        <S.BottomLeft>
          <S.LeftUp src={"/detail_boards/up.png"}></S.LeftUp>
          <S.LeftNumber>{props.data?.fetchBoard.likeCount}</S.LeftNumber>
        </S.BottomLeft>
        <S.BottomRight>
          <S.RightDown src={"/detail_boards/down.png"}></S.RightDown>
          <S.RightNumber>{props.data?.fetchBoard.dislikeCount}</S.RightNumber>
        </S.BottomRight>
      </S.BottomWrap>
    </S.Wrap>
  );
}
