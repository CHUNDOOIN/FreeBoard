import MarketListUIItem from "./MarketList.presenterItem";
import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";
import InfiniteScroll from "react-infinite-scroller";

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
      <S.Row>
        <S.ColumnHeaderBasic style={{ fontWeight: 900 }}>
          ID
        </S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle style={{ fontWeight: 900 }}>
          제목
        </S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic style={{ fontWeight: 900 }}>
          판매자
        </S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic style={{ fontWeight: 900 }}>
          가격
        </S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic style={{ fontWeight: 900 }}>
          찜한사람
        </S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic style={{ fontWeight: 900 }}>
          장바구니
        </S.ColumnHeaderBasic>
      </S.Row>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchUseditems.map((el) => (
          <MarketListUIItem
            key={el._id}
            el={el}
            data={props.data}
            onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
            onClickPicked={props.onClickPicked}
          ></MarketListUIItem>
        ))}
      </InfiniteScroll>

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
