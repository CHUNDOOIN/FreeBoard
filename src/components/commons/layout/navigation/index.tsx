import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";

const Wrapper = styled.div`
  height: 40px;
  background-color: aliceblue;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: 15px;
  font-weight: 900;

  text-align: center;
`;

const Menu = styled.div`
  width: 25%;
  :hover {
    color: red;
  }
`;

const MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "거래게시판", page: "/markets" },
  { name: "오늘의명언", page: "/openapi" },
  { name: "두인방명록", page: "/firebaseboard" },
  { name: "마이페이지", page: "/mypage" },
];

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveBoard = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <Wrapper>
      {MENUS.map((el) => (
        <Fragment key={el.page}>
          <Menu id={el.page} onClick={onClickMoveBoard}>
            {el.name}
          </Menu>
        </Fragment>
      ))}
    </Wrapper>
  );
}
