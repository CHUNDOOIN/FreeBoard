import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  // IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IMarketListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;

  onClickMoveToMarketNew: () => void;
  onClickMoveToMarketDetail: (event: MouseEvent<HTMLDivElement>) => void;

  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  // refetchBoardsCount: (
  //   variables: Partial<IQueryFetchBoardsCountArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;

  // count?: number;
  // keyword: string;
  // onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
