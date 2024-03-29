import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/userState";
import { KakaoAuthTokenFetch } from "../api/user";
import { Cookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { SnsAuthTypeState } from "../recoil/contentState";

export default function KakakoAuth() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  const [kakaoToken, setKakaoToken] = useState();
  const setUserIn = useSetRecoilState(userState);
  const setSnsAuthType = useSetRecoilState(SnsAuthTypeState);

  useEffect(() => {
    if (pathname) {
      localStorage.setItem("snsAuthType", pathname);
    }
  }, [pathname]);

  useEffect(() => {
    async function kakaoGetToken() {
      setKakaoToken(await KakaoAuthTokenFetch(code));
    }

    kakaoGetToken();
  }, []);

  useEffect(() => {
    if (kakaoToken) {
      cookies.set("accessToken", kakaoToken.access_token);
      setUserIn(true);
      setSnsAuthType(pathname);

      navigate("/");
    }
  }, [cookies, kakaoToken, setUserIn, setSnsAuthType, pathname]);

  console.log(kakaoToken);

  return <></>;
}
