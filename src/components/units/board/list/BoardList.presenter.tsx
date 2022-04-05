import { Fragment } from "react";
import Paginations01 from "../../../commons/paginations/Paginations01.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.BestBoardWrapper>
        {props.data3?.fetchBoardsOfTheBest.map((el: any) => (
          <Fragment key={el._id}>
            <S.BestBoard id={el._id}>베트스 게시글 : {el.writer}</S.BestBoard>
          </Fragment>
        ))}
      </S.BestBoardWrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el: any) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{el.createdAt.slice(0, 10)}</S.ColumnBasic>
        </S.Row>
      ))}

      <S.TableBottom />
      <S.Footer>
        <Paginations01 refetch={props.refetch}></Paginations01>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/boardsList/create.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
