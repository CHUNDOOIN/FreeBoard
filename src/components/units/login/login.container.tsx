import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store";
import LoginPageUI from "./login.presenter";
import { LOGIN_USER } from "./login.query";

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  // 이메일 입력
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // 비밀번호 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 로그인 버튼
  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem("accessToken", accessToken);
      Modal.success({
        content: "로그인 성공",
      });
      router.push("/mypage");
      console.log(accessToken);

      //  catch (error) {
    } catch (error) {
      Modal.error({
        content: "로그인 실패",
      });
    }
  };

  return (
    <LoginPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    ></LoginPageUI>
  );
}
