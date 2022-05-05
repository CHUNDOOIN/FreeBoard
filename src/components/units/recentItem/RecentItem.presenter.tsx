import * as S from "./recentItem.styles";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

interface IrecentlyWatchProps {
  todayWatchList: any;
  onClickDeleteList: any;
}
export default function RecentItemUI(props: IrecentlyWatchProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      {props.todayWatchList
        ?.filter(
          (el: any, index: any) => index > props.todayWatchList.length - 6
        )
        .reverse()
        .map((el: any) => (
          <S.MyRow key={el._id}>
            <S.MyColumn>
              <S.ListBox onClick={props.onClickDeleteList(el)}>
                {el.images[0] ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onClick={onClickMoveToPage(`/markets/${el._id}`)}
                  ></S.Img>
                ) : (
                  <S.Img
                    style={{ backgroundColor: "gray" }}
                    onClick={onClickMoveToPage(`/markets/${el._id}`)}
                  ></S.Img>
                )}
                <S.Title>{el.name}</S.Title>
              </S.ListBox>
            </S.MyColumn>
          </S.MyRow>
        ))}
    </S.Wrapper>
  );
}
