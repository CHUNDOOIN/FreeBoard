// 아폴로 관련 임포트
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

// 안트 디자인
import "antd/dist/antd.css";

// 레이아웃
import Layout from "../src/components/commons/layout";

// 글로벌 CSS
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// 기본 설정
import { AppProps } from "next/app";

// 아폴로 이미지 업로드
import { createUploadLink } from "apollo-upload-client";

// 파이어 베이스
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjfa9X6LF6FJ4elvuZaF0i9Px4rDD2MvI",
  authDomain: "dooin2.firebaseapp.com",
  projectId: "dooin2",
  storageBucket: "dooin2.appspot.com",
  messagingSenderId: "821489427687",
  appId: "1:821489427687:web:c4a43155d5ae49fe492e42",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // 모든 셋팅
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
