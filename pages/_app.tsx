// 안트 디자인
import "antd/dist/antd.css";

// 레이아웃
import Layout from "../src/components/commons/layout";

// 글로벌 CSS
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// 기본 설정
import { AppProps } from "next/app";

// 파이어 베이스
import { initializeApp } from "firebase/app";

// 리코일
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

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

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          {/* 여기 Component는 layout에서의 index.tsx */}
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
