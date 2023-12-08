import { Select } from "@mantine/core";
import { useSchemeStore } from "../../stores/themeStore";
import { useTranslation } from "react-i18next";
import { useLangStore } from "../../stores/langStore";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ChangeScheme() {
  const langStore = useLangStore();
  const schemeStore = useSchemeStore();
  const { t } = useTranslation("menu");

  const updateScheme = (scheme: any) => {
    schemeStore.updateScheme(scheme);
  };

  return (
    <div>
      <Select
        defaultValue={schemeStore.scheme}
        value={schemeStore.scheme}
        w={"105px"}
        data={[
          { label: t("dark"), value: "dark" },
          { label: t("light"), value: "light" },
        ]}
        rightSection={
          langStore.lang === "en_US" && schemeStore.scheme === "dark" ? (
            <IconMoon />
          ) : langStore.lang === "en_US" && schemeStore.scheme === "light" ? (
            <IconSun />
          ) : null
        }
        leftSection={
          langStore.lang === "fa_IR" && schemeStore.scheme === "dark" ? (
            <IconMoon />
          ) : langStore.lang === "fa_IR" && schemeStore.scheme === "light" ? (
            <IconSun />
          ) : null
        }
        onChange={updateScheme}
        allowDeselect={false}
      />
    </div>
  );
}
