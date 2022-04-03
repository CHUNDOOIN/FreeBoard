import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Paginations01.queris";
import { Paginations01Props } from "./Paginations01.types";

export default function Paginations01(props: Paginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: data2 } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(data2?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <Paginations01UI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      //
      data={data}
      data2={data2}
    ></Paginations01UI>
  );
}
