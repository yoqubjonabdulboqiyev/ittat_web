import React from "react";
import { ICustomLinkProps } from "./custom-link.types";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
// import languageDetector from "@/utilities/languageDetector";

const CustomLink = ({
  href,
  children,
  locale,
  skipLocaleHandling,
}: ICustomLinkProps) => {
  const router = useRouter();
  const curLocale = locale || (router.query.locale as string | undefined) || "";
  let curHref = href || router.asPath;
  if (href?.indexOf("http") === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    curHref = curHref
      ? `/${locale}${curHref}`
      : router.pathname.replace("[locale]", curLocale);
  }

  return <Link href={curHref}>{children}</Link>;
};

const useChangeLang = () => {
  const router = useRouter();
  const { i18n } = useTranslation(['common']);

  
  return (locale: string) => {
    const curLocale = locale || (router.query.locale as string | undefined) || "";
    const curPath = router.pathname.replace("[locale]", curLocale);
    i18n.changeLanguage(`${curLocale}`);
    router.replace(curPath)
    // languageDetector.cache(locale)
  }
}

export default CustomLink;
export {useChangeLang}
