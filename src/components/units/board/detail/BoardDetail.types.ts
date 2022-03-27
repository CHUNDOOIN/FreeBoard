import { ChangeEvent, MouseEvent } from "react";

// 프리젠터
export interface IBoardDetailUI {
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickComment: (event: MouseEvent<HTMLButtonElement>) => void;

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;

  data?: any;
  data2?: any;
}
