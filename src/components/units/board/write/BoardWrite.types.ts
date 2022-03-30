import { ChangeEvent, MouseEvent } from "react";

// 컨테이너
export interface IBoardWriteProps {
  isEdit: boolean;
  isOpen: boolean;
  data?: any;
}

export interface IVariables {
  boardId: string;
  password: string;
  updateBoardInput: IUpdateBoardInput;
}

export interface IUpdateBoardInput {
  // boardId: router가 가지고 있는 boardId(경로의 아이디)를 입력해준다. (boardId는 사용자가 입력하는 값이 아니라, 리턴값으로 주어지는 값이기 때문)

  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: IBoardAddress;
}

export interface IBoardAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

// 프리젠터
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeZipCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onComplete: any;

  onClickZipCode: () => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isActive: boolean;
  isEdit: boolean;
  isOpen: boolean;
  writerError: any;
  passwordError: any;
  titleError: any;
  contentsError: any;
  data?: any;
  data2?: any;

  zipcode: string;
  address: string;
  addressDetail: string;
}

// 스타일
export interface IRegisterButtonProps {
  isActive: boolean;
}
