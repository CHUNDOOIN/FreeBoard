// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
import * as S from "./MarketWrite.styles";
import { IMarketWriteUIProps } from "./MarketWrite.types";
// import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
// import { v4 as uuidv4 } from "uuid";

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
          상품 등록하기
          {/* {props.isEdit ? "상품 수정하기" : "상품 등록하기"} */}
        </S.Title>
        <S.ItemWrapper>
          <S.Label>상품명</S.Label>
          <S.ItemName placeholder="상품명을 입력해주세요."></S.ItemName>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ItemName placeholder="한줄요약을 작성해주세요."></S.ItemName>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>상품설명</S.Label>
          <S.Contents placeholder="상품설명을 작성해주세요."></S.Contents>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>판매가격</S.Label>
          <S.ItemName placeholder="판매가격을 작성해주세요."></S.ItemName>
        </S.ItemWrapper>

        <S.ItemWrapper>
          <S.Label>태그입력</S.Label>
          <S.ItemName placeholder="태그를 작성해주세요."></S.ItemName>
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

        <S.Button>등록하기</S.Button>

        {/* <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer || ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            />
            <S.SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageWrapper>
        <S.OptionWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper> */}
      </S.Wrapper>
    </>
  );
}
