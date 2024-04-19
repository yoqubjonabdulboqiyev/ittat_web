import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";
import { GetStaticProps } from "next";

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: { locale: lng },
  }));

export const getStaticPaths = () => {
  const staticPaths = {
    fallback: false,
    paths: getI18nPaths(),
  }
  console.log("STATIC_PATHifawehfiwef:", staticPaths)
  return (staticPaths)
};

export const getI18nProps = async (ctx: any, ns = ["common"]) => {
  const locale = ctx?.params?.locale;
  const serverTranslations = await serverSideTranslations(locale, ns);
  let props = { ...serverTranslations };
  return props;
};

export const makeStaticProps = (ns: string[] = []) => {
  const getStaticProps: GetStaticProps = async (ctx) => {
    return { props: await getI18nProps(ctx, ns) };
  };
  return getStaticProps;
};
