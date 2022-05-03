// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
import * as S from "./MarketWrite.styles";
import { IMarketWriteUIProps } from "./MarketWrite.types";
// import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
// import { v4 as uuidv4 } from "uuid";

import "react-quill/dist/quill.snow.css";
// import Editor01 from "../../../commons/editor/01/Editor01";
import dynamic from "next/dynamic";
// import Editor01 from "../../../commons/editor/01/Editor01";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  return (
    <>
      {/* {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )} */}
      <S.Wrapper>
        <S.Title>
          {/* {props.isEdit ? "상품 수정" : "상품 등록"} */}
          {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
        </S.Title>
        <S.ItemWrapper>
          <S.Label>상품명</S.Label>
          <S.ItemName
            placeholder="상품명을 입력해주세요."
            onChange={props.onChangeName}
          ></S.ItemName>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ItemName
            placeholder="한줄요약을 작성해주세요."
            onChange={props.onChangeRemarks}
          ></S.ItemName>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>상품설명</S.Label>
          <S.ReactQuillWrapper>
            {/* <Editor01></Editor01> */}
            <ReactQuill
              onChange={props.onChangeContents}
              style={{ width: "100%", height: "320px", font: "Serif" }}
            ></ReactQuill>

            {/* <Editor01 onChange={props.onChangeContents}></Editor01> */}
          </S.ReactQuillWrapper>
          {/* <S.Contents placeholder="상품설명을 작성해주세요."></S.Contents> */}
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>판매가격</S.Label>
          <S.ItemName
            placeholder="판매가격을 작성해주세요."
            onChange={props.onChangePrice}
          ></S.ItemName>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>태그입력</S.Label>
          <S.ItemName
            placeholder="태그를 작성해주세요."
            onChange={props.onChangeTag}
          ></S.ItemName>
        </S.ItemWrapper>

        <S.MapWrapper>
          <S.LeftWrapper>
            <S.Label>거래위치</S.Label>
            <S.Map placeholder="거래위치를 작성해주세요."></S.Map>
          </S.LeftWrapper>

          <S.RightWrapper>
            <S.RightUpWrapper>
              <S.Label>GPS</S.Label>
              <S.RightInputWrapper>
                <S.RightUpInput placeholder="위도(LAT)"></S.RightUpInput>
                <S.RightUpInput placeholder="경도(LNG)"></S.RightUpInput>
              </S.RightInputWrapper>
            </S.RightUpWrapper>

            <S.RightDownWrapper>
              <S.Label>주소</S.Label>
              <S.Address></S.Address>
              <S.Address2></S.Address2>
            </S.RightDownWrapper>
          </S.RightWrapper>
        </S.MapWrapper>

        <S.ImageWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.UploadWrapper>
            <S.Image></S.Image>
            <S.Image></S.Image>
          </S.UploadWrapper>
        </S.ImageWrapper>

        <S.OptionWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>

        <S.Button onClick={props.onClickSubmit}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.Button>
      </S.Wrapper>
    </>
  );
}
