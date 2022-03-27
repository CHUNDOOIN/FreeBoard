import { ChangeEvent, MouseEvent } from "react";

export interface IBoardListUIProps {
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: () => void;
  data?: any;
}
