import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../quiz-22.04.12/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage() {
  const router = useRouter();
  // const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 키가 없을때
  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인 해주세요!");
  //     router.push("01-login");
  //     return () => {};
  //   }
  // }, []);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    router.reload();
  };

  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
      <button onClick={onClickLogout}>로그아웃</button>
    </div>
  );
}

export default withAuth(MyPage);
