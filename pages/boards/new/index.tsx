// 등록 페이지 (수정페이지와 구분을 위한 isEdit false)
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardWritePage() {
  return <BoardWrite isEdit={false}></BoardWrite>;
}
