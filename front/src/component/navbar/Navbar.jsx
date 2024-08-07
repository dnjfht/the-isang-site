import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserDataState,
  UserNecessaryDataState,
  userState,
} from "../../recoil/userState";
import { useRecoilState, useRecoilValue } from "recoil";
import { Cookies } from "react-cookie";
import { GoogleUserDataFetch, KakaoUserDataFetch } from "../../api/user";
import { SnsAuthTypeState } from "../../recoil/contentState";
import MenuList from "./MenuList";
import MobileMenuList from "./MobileMenuList";
import { getUserData } from "../../common";
import Util from "./Util";

import { CiDark, CiLight, CiMenuBurger } from "react-icons/ci";
import { CiSearch, CiUser } from "react-icons/ci";

export default function Navbar({ setSideBarOpen, sideBarOpen }) {
  const navigate = useNavigate();

  const userIn = useRecoilValue(userState);

  const [snsAuthType, setSnsAuthType] = useRecoilState(SnsAuthTypeState);
  const [userData, setUserData] = useRecoilState(UserDataState);
  const [userNecessaryData, setUserNecessaryData] = useRecoilState(
    UserNecessaryDataState
  );

  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");

  useEffect(() => {
    if (localStorage.getItem("snsAuthType")) {
      setSnsAuthType(localStorage.getItem("snsAuthType"));
    }
  }, []);

  useEffect(() => {
    if (accessToken && snsAuthType) {
      const fetchData = async () => {
        const fetchFunction =
          snsAuthType === "googleAuth"
            ? GoogleUserDataFetch
            : KakaoUserDataFetch;
        setUserData(await fetchFunction(accessToken));
      };

      fetchData();
    }
  }, [accessToken, setUserData, snsAuthType]);

  // useState의 초기 상태를 함수로 설정하면, 이 함수는 컴포넌트가 처음 렌더링될 때 한 번만 호출됨.
  // 이를 이용하면 컴포넌트가 렌더링되기 전에 localStorage의 값을 읽어와 상태를 설정할 수 있음.
  // 이 방법은 컴포넌트가 렌더링되기 전에 필요한 작업을 처리하는 데 유용.
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 다크 모드 설정을 불러옴.
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  // 다크 모드 상태가 변경될 때마다 이를 로컬 스토리지에 저장.
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  useEffect(() => {
    if (snsAuthType && userData) {
      setUserNecessaryData(getUserData(snsAuthType, userData));
    }
  }, [snsAuthType, userData, setUserNecessaryData]);

  const { profileImg, userNickname } = userNecessaryData;

  return (
    <div className="w-full dark:bg-black dark:text-white">
      <div className="w-11/12 sm:max-w-[90%] mx-auto">
        <div className="relative flex items-center justify-between w-full py-8 sm:py-12 sm:static">
          <Util
            icon={<CiMenuBurger />}
            onClick={() => setSideBarOpen(true)}
            basicStyle="text-[1.2rem] text-[#f5aa15]"
            smStyle="sm:hidden"
          />

          <div
            className="md:w-[80px] sm:w-[70px] w-[60px] sm:static absolute top-4 left-[50%] sm:ml-0 ml-[-30px]"
            onClick={() => navigate("/")}
          >
            <img
              className="object-cover w-full mx-auto cursor-pointer"
              src={
                process.env.PUBLIC_URL + "/logo/logo2.png".replace("./", "/")
              }
              alt="logo"
            />
          </div>

          <MenuList />
          <MobileMenuList
            setSideBarOpen={setSideBarOpen}
            sideBarOpen={sideBarOpen}
          />

          <div className="flex items-center">
            <Util
              icon={darkMode ? <CiLight /> : <CiDark />}
              onClick={() => setDarkMode(!darkMode)}
              basicStyle="text-[1.2rem] text-[#f5aa15]"
              smStyle="sm:mr-4 mr-2 sm:text-[1.5rem]"
              mdStyle="md:mr-4  md:text-[1.8rem]"
              lgStyle="lg:mr-8"
            />

            <Util
              icon={<CiSearch />}
              onClick={() => navigate("/search")}
              basicStyle="text-[1.2rem] text-[#f5aa15]"
              smStyle="sm:text-[1.5rem]"
              mdStyle="md:text-[1.8rem]"
            />

            <Util
              icon={<CiUser />}
              onClick={() => navigate("/auth")}
              basicStyle="text-[1.2rem] text-[#f5aa15] ml-2"
              smStyle="sm:ml-4 sm:text-[1.5rem]"
              mdStyle="md:ml-4 md:text-[1.8rem]"
              lgStyle="lg:ml-8"
              isHidden={!userIn ? "block" : "hidden"}
            />

            <Util
              onClick={() => navigate("/mypage")}
              basicStyle="ml-2 flex items-center gap-x-2 text-[0.875rem] font-medium"
              smStyle="sm:ml-4"
              mdStyle="md:ml-4"
              lgStyle="lg:ml-8"
              isHidden={userIn ? "block" : "hidden"}
              profileImg={profileImg}
              userNickname={userNickname}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
