import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 90px;
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 700;

  cursor: pointer;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const onClickMain = () => {
    Modal.info({
      content: "메인으로 이동합니다.",
    });

    router.push("/");
  };
  return <Wrapper onClick={onClickMain}>🙈 두인이네 🙊</Wrapper>;
}
