import { ChangeEvent, MouseEvent } from "react";

// 프리젠터
export interface IBoardDetailUI {
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
}
