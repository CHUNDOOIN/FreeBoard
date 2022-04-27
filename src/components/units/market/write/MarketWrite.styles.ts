import styled from "@emotion/styled";
// import { ISubmitButtonProps } from "./MarketWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;

  padding-bottom: 80px;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding-top: 0px;

  padding-bottom: 40px;
`;

export const ReactQuillWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding-top: 0px;

  padding-bottom: 40px;
`;

export const ItemName = styled.input`
  width: 996;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 320px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 24px;
`;

export const Map = styled.div`
  width: 384px;
  height: 252px;

  background-color: gray;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightInputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom: 40px;
`;

export const RightUpInput = styled.input`
  width: 108px;
  height: 52px;
  display: flex;
  flex-direction: row;

  text-align: center;

  margin-right: 20px;
`;

export const RightDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.input`
  width: 588px;
  height: 52px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  margin-bottom: 16px;
`;

export const Address2 = styled.input`
  width: 588px;
  height: 52px;
  display: flex;
  padding-left: 16px;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 40px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;

  background-color: gray;
  margin-right: 24px;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-bottom: 80px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
`;

/* background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"}; */

// export const Zipcode = styled.input`
//   width: 77px;
//   height: 52px;
//   padding-left: 16px;
//   border: 1px solid #bdbdbd;
// `;

// export const SearchButton = styled.button`
//   width: 124px;
//   height: 52px;
//   margin-left: 16px;
//   background-color: black;
//   cursor: pointer;
//   color: white;
// `;

// export const Address = styled.input`
//   width: 996px;
//   height: 52px;
//   margin-top: 16px;
//   padding-left: 16px;
//   border: 1px solid #bdbdbd;
// `;

// export const Youtube = styled.input`
//   width: 996px;
//   height: 52px;
//   padding-left: 16px;
//   border: 1px solid #bdbdbd;
// `;

// export const ImageWrapper = styled.div`
//   width: 996px;
//   padding-top: 40px;
// `;

// export const UploadButton = styled.button`
//   width: 78px;
//   height: 78px;
//   background-color: #bdbdbd;
//   margin-right: 24px;
//   outline: none;
//   border: none;
//   cursor: pointer;
// `;

// export const OptionWrapper = styled.div`
//   width: 996px;
//   padding-top: 40px;
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-top: 80px;
// `;

// export const CancelButton = styled.button`
//   width: 179px;
//   height: 52px;
//   background-color: #bdbdbd;
//   border: none;
//   font-size: 16px;
//   font-weight: 500;
//   margin-left: 12px;
//   margin-right: 12px;
//   cursor: pointer;
// `;

// export const Error = styled.div`
//   padding-top: 10px;
//   font-size: 14px;
//   color: red;
// `;
