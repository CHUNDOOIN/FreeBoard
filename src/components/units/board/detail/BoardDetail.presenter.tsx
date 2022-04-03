import { MouseEvent } from "react";
import { IBoardDetailUI } from "./BoardDetail.types";
import { Modal, Rate } from "antd";
import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI(props: IBoardDetailUI) {
  return (
    <S.Wrap>
      {props.isOpenDeleteModal && (
        <Modal visible={true} onOk={props.onClickCommentDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      <S.InWrap>
        <S.HeaderWrap>
          <S.HeaderLeft>
            <S.LeftImg src={"/detail_boards/user.png"}></S.LeftImg>
            <S.LeftWrap>
              <S.LeftTitle>{props.data?.fetchBoard.writer}</S.LeftTitle>
              <S.LeftDate>
                {getDate(props.data?.fetchBoard.createdAt)}
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
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="486px"
              height="240px"
            />
          )}
        </S.YoutubeWrap>

        <S.BottomWrap>
          <S.BottomLeft>
            <S.LeftUp
              onClick={props.onClickBoardLike}
              src={"/detail_boards/up.png"}
            ></S.LeftUp>
            <S.LeftNumber>{props.data?.fetchBoard.likeCount}</S.LeftNumber>
          </S.BottomLeft>
          <S.BottomRight>
            <S.RightDown
              onClick={props.onClickBoardDislike}
              src={"/detail_boards/down.png"}
            ></S.RightDown>
            <S.RightNumber>{props.data?.fetchBoard.dislikeCount}</S.RightNumber>
          </S.BottomRight>
        </S.BottomWrap>
      </S.InWrap>

      <S.OutWrap>
        <S.ButtonWarp>
          <S.Button onClick={props.onClickMoveList}>목록으로</S.Button>
          <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
          <S.Button
            // id={props.data?.fetchBoard._id}
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

        {/* 코멘드 댓글 작성 */}
        <S.WriterCommentWrap>
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
            <Rate onChange={props.handleChange} value={props.value}></Rate>
          </S.WriterInputWrap>

          <S.ContentsInputWrap>
            <S.InputUpWrap
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></S.InputUpWrap>

            <S.InputDownWrap>
              <S.ContentsNumber>
                {props.data?.fetchBoard.contents.length}/100
              </S.ContentsNumber>
              <S.ContentsButton onClick={props.onClickComment}>
                등록하기
              </S.ContentsButton>
            </S.InputDownWrap>
          </S.ContentsInputWrap>
        </S.WriterCommentWrap>

        {/* 코멘트 댓글 수정 */}
        {/* <S.EditCommentWrap>
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
            <Rate onChange={props.handleChange} value={props.value}></Rate>
          </S.WriterInputWrap>
          <S.ContentsInputWrap>
            <S.InputUpWrap
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></S.InputUpWrap>

            <S.InputDownEditWrap>
              <S.ContentsEditNumber>
                {props.contents.length}/100
              </S.ContentsEditNumber>
              <S.ContentsEditButton>수정하기</S.ContentsEditButton>
            </S.InputDownEditWrap>
          </S.ContentsInputWrap>
        </S.EditCommentWrap> */}

        {props.data2?.fetchBoardComments.map((el: any) => (
          <S.ListWrap key={el._id}>
            <S.ListUpWrap>
              <S.ListUpLeft src="/detail_boards/user.png"></S.ListUpLeft>

              <S.ListUpRight>
                <S.RightUpWrap>
                  <S.UpWrapLeft>
                    {" "}
                    <S.RightUpName>{el.writer}</S.RightUpName>
                    <Rate value={el.rating}></Rate>
                  </S.UpWrapLeft>

                  <S.UpWrapRight>
                    <S.CommentEditIcon
                      // onClick={props.onClickEditInput}
                      src="/detail_boards/edit.png"
                    ></S.CommentEditIcon>
                    <S.CommentCancelIcon
                      onClick={props.onClickOpenDeleteModal}
                      src="/detail_boards/cancel.png"
                      id={el._id}
                    ></S.CommentCancelIcon>{" "}
                  </S.UpWrapRight>
                </S.RightUpWrap>

                <S.RightDownWrap>
                  <S.RightDownContents>{el.contents} </S.RightDownContents>
                  <S.RightDownDownDate>
                    {getDate(el.createdAt)}
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
