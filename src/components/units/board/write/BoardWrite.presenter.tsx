import { ChangeEvent } from "react";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrap>
      <S.TitleText>게시물{props.isEdit ? "수정" : "등록"}</S.TitleText>

      <S.InfoWrap>
        <S.InfoWrapLeft>
          <S.LeftWriter>작성자</S.LeftWriter>
          <S.LeftWriterInput
            onChange={props.onChangeWriter}
            type="text"
            placeholder="이름을 적어주세요."
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={props.data?.fetchBoard.writer}
          ></S.LeftWriterInput>
          <S.Error>{props.writerError}</S.Error>
        </S.InfoWrapLeft>

        <S.InfoWrapRight>
          <S.RightPassword>비밀번호</S.RightPassword>
          <S.RightPasswordInput
            onChange={props.onChangePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></S.RightPasswordInput>
          <S.Error>{props.passwordError}</S.Error>
        </S.InfoWrapRight>
      </S.InfoWrap>

      <S.TitleWrap>
        <S.TitleTitle>제목</S.TitleTitle>
        <S.TitleInput
          onChange={props.onChangeTitle}
          type="text"
          placeholder="제목을 작성해주세요."
          defaultValue={props.data?.fetchBoard.title}
        ></S.TitleInput>
        <S.Error>{props.titleError}</S.Error>
      </S.TitleWrap>

      <S.MainWrap>
        <S.MainTitle>내용</S.MainTitle>
        <S.MainInput
          onChange={props.onChangeContents}
          placeholder="내용을 작성해주세요."
          defaultValue={props.data?.fetchBoard.contents}
        ></S.MainInput>
        <S.Error>{props.contentsError}</S.Error>
      </S.MainWrap>

      <S.AddressWrap>
        <S.AddressTitle>주소</S.AddressTitle>
        <S.ZipCodeWrap>
          <S.ZipCode
            onChange={props.onChangeZipCode}
            placeholder={props.data?.fetchBoard?.boardAddress?.zipcode}
            defaultValue={props.data?.fetchBoard?.boardAddress?.zipcode}
            // readOnly
            // value={props.zipcode}
            // value={props.zipcode}
            // defaultValue={props.data?.fetchBoard.boardAddress.zipcode}
          ></S.ZipCode>
          <S.ZipCodeSearch onClick={props.onClickZipCode}>
            우편번호 검색{" "}
            {props.isOpen && (
              <Modal
                title="Basic Modal"
                visible={true}
                onOk={props.onClickZipCode}
                onCancel={props.onClickZipCode}
              >
                <DaumPostcode onComplete={props.onComplete} />
              </Modal>
            )}
          </S.ZipCodeSearch>
        </S.ZipCodeWrap>
        <S.AddressInput1
          // onChange={props.onChangeAddress}
          // value={props.address}
          // defaultValue={props.data?.fetchBoard.boardAddress.address}

          defaultValue={props.data?.fetchBoard?.boardAddress?.address}
          placeholder={props.data?.fetchBoard?.boardAddress?.address}
          // readOnly
          // value={props.address}
        ></S.AddressInput1>
        <S.AddressInput2
          onChange={props.onChangeAddressDetail}
          defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
        ></S.AddressInput2>
      </S.AddressWrap>

      <S.YoutubeWrap>
        <S.YoutubeWrapTitle>유튜브</S.YoutubeWrapTitle>
        <S.YoutubeWrapInput
          onChange={props.onChangeYoutube}
          type="text"
          placeholder="링크를 복사해주세요."
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        ></S.YoutubeWrapInput>
      </S.YoutubeWrap>

      <S.ImageWrap>
        <S.ImageTitle>사진 첨부</S.ImageTitle>
        <S.ImageUploadWrap>
          <S.ImageUpload>
            +<br />
            Upload
          </S.ImageUpload>
          <S.ImageUpload>
            +<br />
            Upload
          </S.ImageUpload>
          <S.ImageUpload>
            +<br />
            Upload
          </S.ImageUpload>
        </S.ImageUploadWrap>
      </S.ImageWrap>

      <S.SetWrap>
        <S.SetTitle>메인 설정</S.SetTitle>
        <S.SetButton type="radio" name="gender" />
        <S.SetLabel>유튜브</S.SetLabel>
        <S.SetButton type="radio" name="gender" />
        <S.SetLabel>사진</S.SetLabel>
      </S.SetWrap>

      <S.RegisterWrap>
        <S.RegisterButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.RegisterButton>
      </S.RegisterWrap>
    </S.Wrap>
  );
}
