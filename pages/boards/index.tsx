// 게시글 리스트 페이지
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BoardList from "../../src/components/units/board/list/BoardList.container";

function BoardListPage() {
  return <BoardList></BoardList>;
}

export default withAuth(BoardListPage);
