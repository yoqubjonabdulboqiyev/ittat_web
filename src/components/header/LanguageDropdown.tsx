import { Dropdown } from "@nextui-org/react";
import { useRouter } from "next/router";
import i18nextConfig from "../../../next-i18next.config";
import { useChangeLang } from "../custom-link";

export type languages = "uz" | "en" | "ru";

function LanguageDropdown() {
  const router = useRouter()
  const curLocale = (router.query.locale as string) || i18nextConfig.i18n.defaultLocale || 'uz'  
  const changeLang = useChangeLang();

  const handleClick = (langSet: any) => {
    const lang = Array.from(langSet)[0] as string;

    changeLang(lang)
  }
  return (
    <Dropdown>
      <Dropdown.Button
        bordered
        css={{ color: "#141414", borderColor: "#141414" }}
      >
        {curLocale.toUpperCase()}
      </Dropdown.Button>
      <Dropdown.Menu
        selectionMode="single"
        selectedKeys={curLocale}
        onSelectionChange={handleClick}
        css={{ minWidth: "initial" }}
      >
        {i18nextConfig.i18n.locales.map((lng) => (
          <Dropdown.Item key={lng}>{lng.toUpperCase()}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
