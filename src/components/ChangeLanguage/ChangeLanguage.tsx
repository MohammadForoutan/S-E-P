import { Select } from "@mantine/core";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLangStore } from "../../stores/langStore";
import { LANGS } from "../../i18n/locales/type";

function ChangeLanguage() {
  const { i18n } = useTranslation(["menu"]);
  const langStore = useLangStore();

  useEffect(() => {
    i18n.changeLanguage(langStore.lang);
    if (langStore.lang === LANGS.fa_IR) {
      document.body.style.direction = "rtl";
      document.body.style.textAlign = "right";
      Array.from(document.querySelectorAll("textarea, select, input, option")).forEach(
        (element: any) => {
          element.style.direction = "rtl";
          element.style.textAlign = "right";
        }
      );
    } else {
      document.body.style.direction = "ltr";
      document.body.style.textAlign = "left";
      Array.from(document.querySelectorAll("textarea, select, input, option")).forEach(
        (element: any) => {
          element.style.direction = "ltr";
          element.style.textAlign = "left";
        }
      );
    }
  }, [langStore.lang, i18n]);

  const changeLang = (lang: LANGS) => {
    i18n.changeLanguage(lang);
    langStore.updateLang(lang);
  };
  return (
    <div>
      <Select
        defaultValue={langStore.lang}
        value={langStore.lang}
        w={"200px"}
        data={[
          { label: "فارسی", value: "fa_IR" },
          { label: "English", value: "en_US" },
        ]}
        onChange={changeLang}
        allowDeselect={false}
      />
    </div>
  );
}

export { ChangeLanguage };
