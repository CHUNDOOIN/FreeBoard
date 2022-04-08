import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Font = styled.div`
  font-size: 30px;
`;

export default function OpenApiPage() {
  const [url, setUrl] = useState();

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://api.adviceslip.com/advice");
      console.log(result.data.slip.advice);
      setUrl(result.data.slip.advice);
    };
    aaa();
  }, []);

  return (
    <Wrapper>
      <Font>{url}</Font>
    </Wrapper>
  );
}
