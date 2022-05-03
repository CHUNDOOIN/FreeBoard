import { getDate } from "../../../../commons/libraries/utils";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import * as S from "./MarketDetail.styles";
import { Tooltip } from "antd";
import Dompurify from "dompurify";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchUseditem?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchUseditem.boardAddress?.address} ${props.data?.fetchUseditem.boardAddress?.addressDetail}`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchUseditem?.title}</S.Title>
          <S.ImageWrapper>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
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
          {props.data?.fetchUseditem.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchUseditem.youtubeUrl}
              width="486px"
              height="240px"
            />
          )}
          {/* <S.LikeWrapper>
            <S.IconWrapper>
              <S.LikeIcon onClick={props.onClickLike} />
              <S.LikeCount>{props.data?.fetchUseditem.likeCount}</S.LikeCount>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.DislikeIcon onClick={props.onClickDislike} />
              <S.DislikeCount>
                {props.data?.fetchUseditem.dislikeCount}
              </S.DislikeCount>
            </S.IconWrapper>
          </S.LikeWrapper> */}
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
