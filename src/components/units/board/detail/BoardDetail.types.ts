import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

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

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  //

  isOpenDeleteModal: boolean;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onClickCommentDelete: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;

  // onClickEditInput: (
  //   event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  // ) => void;

  handleChange: any;

  data?: Pick<IQuery, "fetchBoard">;
  data2?: Pick<IQuery, "fetchBoardComments">;

  value: any;
}
