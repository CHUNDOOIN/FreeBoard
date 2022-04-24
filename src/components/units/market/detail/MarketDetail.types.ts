import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToMarketList: () => void;
  onClickMoveToMarketEdit: () => void;
}
