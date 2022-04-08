import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 152px;
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  font-weight: 900;
`;

export default function LayoutHeader() {
  return <Wrapper>🙈 두인이네 🙊</Wrapper>;
}
