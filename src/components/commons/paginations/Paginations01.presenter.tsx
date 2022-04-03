import Paginations01 from "./Paginations01.container";
import { Page } from "./Paginations01.styles";
import { Paginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: Paginations01UIProps) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>이전페이지</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <Page
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
            >
              {` `} {index + props.startPage}
            </Page>
          )
      )}
      {` `}
      <Page onClick={props.onClickNextPage}>다음페이지</Page>
    </div>
  );
}
