import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

export default function Paginations01UI(props) {
  return (
    <div>
      <span onClick={props.onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <span
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
            >
              {` `} {index + props.startPage}
            </span>
          )
      )}
      <span onClick={props.onClickNextPage}>다음페이지</span>
    </div>
  );
}
