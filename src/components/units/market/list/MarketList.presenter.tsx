import MarketListUIItem from "./MarketList.presenterItem";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import RecentItem from "../../recentItem/RecentItem.container";

export default function MarketListUI(props: any) {
  return (
    <S.Wrapper>
      <S.TodayListWrapper>
        오늘 본 상품
        <S.TodayList>
          <RecentItem></RecentItem>
        </S.TodayList>
      </S.TodayListWrapper>
      <S.TableWrapper>
        <S.Button onClick={props.onClickMoveToMarketNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          상품 등록하기
        </S.Button>
        <S.TableTop></S.TableTop>
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
          {props.data?.fetchUseditems.map((el: any) => (
            <MarketListUIItem
              key={el._id}
              el={el}
              data={props.data}
              onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
              onClickPicked={props.onClickPicked}
              onClick={props.onClickToday}
            ></MarketListUIItem>
          )) || <div></div>}
        </InfiniteScroll>

        <S.TableBottom />
        <S.Footer></S.Footer>
      </S.TableWrapper>
    </S.Wrapper>
  );
}
