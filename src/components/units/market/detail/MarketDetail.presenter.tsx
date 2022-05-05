import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MarketDetail.styles";
import Dompurify from "dompurify";
import KakaoMapPage from "../../board/map";

export default function MarketDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchUseditem?.name}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            {/* <S.LinkIcon src="/images/board/detail/link.png" /> */}
            <S.LocationIcon>
              ❤{props.data?.fetchUseditem.pickedCount}
            </S.LocationIcon>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchUseditem?.remarks}</S.Title>
          <S.ImageWrapper>
            {props.data?.fetchUseditem.images[0] ? (
              <S.Image
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              ></S.Image>
            ) : (
              <S.Image></S.Image>
            )}
          </S.ImageWrapper>
          <S.Contents>
            {/* {props.data?.fetchUseditem.contents} */}
            {/* <div>{props.data?.fetchUseditem.contents}</div> */}
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></div>
            ) : (
              <div></div>
            )}
          </S.Contents>
          <S.ImageWrapper>
            {props.data?.fetchUseditem?.useditemAddress?.address ? (
              <KakaoMapPage
                address={props.data?.fetchUseditem?.useditemAddress?.address}
              />
            ) : (
              <></>
            )}
          </S.ImageWrapper>
        </S.Body>
      </S.CardWrapper>

      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToMarketList}>목록으로!</S.Button>
        <S.Button onClick={props.onClickMoveToMarketEdit}>수정하기!</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기!</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
