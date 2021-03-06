import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  /* 
  font-size: 50px;
  font-weight: 900;

  text-align: center; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* padding: 30px; */

  background-color: aliceblue;
`;

const LoginWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MainImg = styled.img`
  width: 600px;
  height: 400px;
`;

const Text = styled.div`
  width: 600px;
  font-size: 30px;

  text-align: center;
`;

export default function Home() {
  const router = useRouter();

  const onClickMoveLogin = () => {
    router.push("/login");
  };

  const onClickMoveSignUp = () => {
    router.push("/signup");
  };

  return (
    <Wrapper>
      <Text>π λμΈμ΄λ€ μ€μ κ±Έ νμν©λλ€. π</Text>
      <MainImg src="/images/hawaii.jpg"></MainImg>
      <LoginWrapper>
        <button onClick={onClickMoveSignUp}>νμκ°μ</button>
        <button onClick={onClickMoveLogin}>λ‘κ·ΈμΈ</button>
      </LoginWrapper>
    </Wrapper>
  );
}
