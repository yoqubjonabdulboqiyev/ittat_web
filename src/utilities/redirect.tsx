import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";

export const useRedirect = (redirTo?: string) => {
  const router = useRouter();
  const to = redirTo || router.asPath;

  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to.startsWith("/" + detectedLng) && router.route !== "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
    }

    languageDetector.cache(detectedLng);
    router.replace("/" + detectedLng + to);
  });
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

export const getRedirect = (to?: string) => {
  useRedirect(to);
  return <></>;
};
