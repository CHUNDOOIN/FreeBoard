import { MouseEvent } from "react";
import { IBoardDetailUI } from "./BoardDetail.types";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props: IBoardDetailUI) {
  return (
    <S.Wrap>
      <S.InWrap>
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
              <S.RightLinkIcon
                src={"/detail_boards/link.png"}
              ></S.RightLinkIcon>
              <S.RightMapIcon src={"/detail_boards/map.png"}></S.RightMapIcon>
            </S.RightIconWrap>
          </S.HeaderRight>
        </S.HeaderWrap>

        <S.MainWrap>
          <S.MainTitle>{props.data?.fetchBoard.title}</S.MainTitle>
          <S.MainImg src={props.data?.fetchBoard.title}></S.MainImg>
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
      </S.InWrap>

      <S.OutWrap>
        <S.ButtonWarp>
          <S.Button onClick={props.onClickMoveList}>목록으로</S.Button>
          <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
          <S.Button
            id={props.data?.fetchBoard.boardId}
            onClick={props.onClickDelete}
          >
            삭제하기
          </S.Button>
        </S.ButtonWarp>
      </S.OutWrap>

      <S.CommentsWrap>
        <S.WriterWrap>
          <S.WriterIcon src="/detail_boards/comment.png"></S.WriterIcon>
          <S.Writer>댓글</S.Writer>
        </S.WriterWrap>

        <S.WriterInputWrap>
          <S.WriterInput
            onChange={props.onChangeWriter}
            type="text"
            placeholder="작성자"
          ></S.WriterInput>
          <S.PasswordInput
            onChange={props.onChangePassword}
            type="password"
            placeholder="비밀번호"
          ></S.PasswordInput>
          <S.RatingInput
            onChange={props.onChangeRating}
            type="text"
            placeholder="별점"
          ></S.RatingInput>
          {/* <S.Rating src="/detail_boards/star.png"></S.Rating>
          <S.Rating src="/detail_boards/star.png"></S.Rating>
          <S.Rating src="/detail_boards/star.png"></S.Rating>
          <S.Rating src="/detail_boards/star.png"></S.Rating>
          <S.Rating src="/detail_boards/star.png"></S.Rating> */}
        </S.WriterInputWrap>

        <S.ContentsInputWrap>
          <S.InputUpWrap
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.InputUpWrap>

          <S.InputDownWrap>
            <S.ContentsNumber>0/100</S.ContentsNumber>
            <S.ContentsButton onClick={props.onClickComment}>
              등록하기
            </S.ContentsButton>
          </S.InputDownWrap>
        </S.ContentsInputWrap>

        {/* <S.EditerInputWrap></S.EditerInputWrap>

        <S.EditContentsInputWrap></S.EditContentsInputWrap> */}

        {props.data2?.fetchBoardComments.map((el: any) => (
          <S.ListWrap key={el._id}>
            <S.ListUpWrap>
              <S.ListUpLeft src="/detail_boards/user.png"></S.ListUpLeft>

              <S.ListUpRight>
                <S.RightUpWrap>
                  <S.UpWrapLeft>
                    {" "}
                    <S.RightUpName>{el.writer}</S.RightUpName>
                    <S.Rating src="/detail_boards/star.png"></S.Rating>
                    <S.Rating src="/detail_boards/star.png"></S.Rating>
                    <S.Rating src="/detail_boards/star.png"></S.Rating>
                    <S.Rating src="/detail_boards/star.png"></S.Rating>
                    <S.Rating src="/detail_boards/star.png"></S.Rating>
                  </S.UpWrapLeft>

                  <S.UpWrapRight>
                    <S.CommentEditIcon src="/detail_boards/edit.png"></S.CommentEditIcon>
                    <S.CommentCancelIcon src="/detail_boards/cancel.png"></S.CommentCancelIcon>{" "}
                  </S.UpWrapRight>
                </S.RightUpWrap>

                <S.RightDownWrap>
                  <S.RightDownContents>{el.contents} </S.RightDownContents>
                  <S.RightDownDownDate>
                    {el.createdAt.slice(0, 10)}
                  </S.RightDownDownDate>
                </S.RightDownWrap>
              </S.ListUpRight>
            </S.ListUpWrap>
          </S.ListWrap>
        ))}
      </S.CommentsWrap>
    </S.Wrap>
  );
}
