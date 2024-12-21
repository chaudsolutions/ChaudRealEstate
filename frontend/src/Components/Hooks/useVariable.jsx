import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// backend api route
export const serVer = import.meta.env.VITE_API_LIVE;

export const localStorageToken = "realEstatePlatformUser";

export const useToken = () => {
  const [token, setToken] = useState(localStorageToken);

  useEffect(() => {
    const token = localStorage.getItem(localStorageToken);

    setToken(token);
  }, []);

  return { token };
};

// use responsive hook
export const useResponsive = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return { isMobile };
};

// company name
export const companyName = "companyName";
