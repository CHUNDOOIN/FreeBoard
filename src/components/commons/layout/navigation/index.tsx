import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 100px;
  background-color: aliceblue;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  cursor: pointer;

  font-size: 30px;
  font-weight: 900;
`;

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveBoard = () => {
    router.push("/boards");
  };
  return <Wrapper onClick={onClickMoveBoard}>자유게시판</Wrapper>;
}
