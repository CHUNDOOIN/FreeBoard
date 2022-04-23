// 아폴로 관련 임포트
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

// 아폴로 이미지 업로드
import { createUploadLink } from "apollo-upload-client";

import { ReactNode, useEffect } from "react";

// 리코일
import { useRecoilState } from "recoil";

// 토큰
import { accessTokenState } from "../store";

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 로컬스토리지 가져오기
  useEffect(() => {
    const myToken = localStorage.getItem("accessToken");
    setAccessToken(myToken || "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
