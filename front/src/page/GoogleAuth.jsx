import React, { useEffect, useState } from "react";
import { GoogleAuthTokenFetch } from "../api/user";
import { Cookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { userState } from "../recoil/userState";
import { useSetRecoilState } from "recoil";
import { SnsAuthTypeState } from "../recoil/contentState";

export const GoogleAuth = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  const [googleToken, setGoogleToken] = useState();
  const setUserIn = useSetRecoilState(userState);
  const setSnsAuthType = useSetRecoilState(SnsAuthTypeState);

  useEffect(() => {
    if (pathname) {
      localStorage.setItem("snsAuthType", pathname);
    }
  }, [pathname]);

  useEffect(() => {
    async function googleGetToken() {
      setGoogleToken(await GoogleAuthTokenFetch(code));
    }

    googleGetToken();
  }, []);

  useEffect(() => {
    if (googleToken) {
      cookies.set("accessToken", googleToken.access_token);
      setUserIn(true);
      setSnsAuthType(pathname);

      navigate("/");
    }
  }, [cookies, googleToken, setUserIn, setSnsAuthType, pathname]);

  console.log(googleToken);

  return <></>;
};

export default GoogleAuth;
