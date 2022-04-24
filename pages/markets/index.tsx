// 마켓글 리스트 페이지
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MarketList from "../../src/components/units/market/list/MarketList.container";

function MarketListPage() {
  return <MarketList></MarketList>;
}

export default withAuth(MarketListPage);
