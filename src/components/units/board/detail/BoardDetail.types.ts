import { ChangeEvent, MouseEvent } from "react";

// 프리젠터 타입
export interface IBoardDetailUI {
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickComment: (event: MouseEvent<HTMLButtonElement>) => void;

  onClickBoardLike: (
    event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) => void;
  onClickBoardDislike: (
    event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) => void;

  // onClickEditComment: (event: MouseEvent<HTMLButtonElement>) => void;
  // onClickEditInput: (event: MouseEvent<HTMLButtonElement>) => void;
  // onClickCommentDelete: (event: MouseEvent<HTMLButtonElement>) => void;

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;

  handleChange: any;

  data?: any;
  data2?: any;

  value?: number;

  writer?: any;
  password?: any;
  contents?: any;
}
