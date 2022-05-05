import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IMarketWriteUIProps {
  isEdit: boolean;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: any;
  getValues: any;
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSubmit: any;
  onClickEdit: any;
  data?: Pick<IQuery, "fetchUseditem">;
  fileUrls: string[];
}
