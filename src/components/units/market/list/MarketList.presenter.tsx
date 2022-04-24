import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";

// import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
// import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
// import BestBoards01 from "../../../commons/bestboards/01/BestBoards.container";
// import { v4 as uuidv4 } from "uuid";

export default function MarketListUI(props: IMarketListUIProps) {
  return (
    <S.Wrapper>
      {/* <BestBoards01></BestBoards01>
      <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      /> */}
      <S.TableTop />
      {/* <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>판매자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>가격</S.ColumnHeaderBasic>
      </S.Row> */}
      {props.data?.fetchUseditems.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          {/* <input type="text" id="bbb" onClick={props.onClickMoveToBoardDetail}/> */}
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToMarketDetail}>
            {
              el.name
              // .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              // .split("#$%")
              // .map((el, index) => (
              //   <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
              //     {el}
              //   </S.TextToken>
              // ))
            }
          </S.ColumnTitle>
          <S.ColumnBasic>{el.seller?.name}</S.ColumnBasic>
          <S.ColumnBasic>{el.price}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
        <S.Button onClick={props.onClickMoveToMarketNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          상품 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
