import { useEffect, useState } from "react";
import * as S from "./MarketList.styles";

export default function MarketListUIItem(props: any) {
  const [isBasket, setIsBasket] = useState(false);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const a = baskets.map((el: any) => el._id);

    if (a.includes(props.el._id)) {
      setIsBasket(true);
    }
  }, []);

  // 담기
  const onclickBasket = (el: any) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    // console.log("1번 확인", baskets);

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("baskets", JSON.stringify(baskets));

    setIsBasket(true);
  };

  // =================================================================

  // 담기 취소
  const onclickDelete = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBaskets = baskets.filter(
      (basketEl: any) => basketEl._id !== el._id
    );
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setIsBasket((prev) => !prev);
  };

  return (
    <S.Row key={props.el._id} onClick={props.onClickToday}>
      <S.ColumnBasic>
        {String(props.el._id).slice(-4).toUpperCase()}
      </S.ColumnBasic>
      <S.ColumnTitle
        id={props.el._id}
        onClick={props.onClickMoveToMarketDetail(props.el)}
      >
        {props.el.name}
      </S.ColumnTitle>
      <S.ColumnBasic>{props.el.seller?.name}</S.ColumnBasic>
      <S.ColumnBasic>{props.el.price}</S.ColumnBasic>
      <S.ColumnBasic onClick={props.onClickPicked} id={props.el._id}>
        💕{props.el.pickedCount}
      </S.ColumnBasic>
      <S.ColumnBasic
        style={{ color: isBasket ? "red" : "black" }}
        onClick={isBasket ? onclickDelete(props.el) : onclickBasket(props.el)}
      >
        {isBasket ? "담기취소" : "바구니로"}
      </S.ColumnBasic>
    </S.Row>
  );
}
