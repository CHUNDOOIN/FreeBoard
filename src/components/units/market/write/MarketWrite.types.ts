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
}
