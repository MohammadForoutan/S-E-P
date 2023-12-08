import { Select } from "@mantine/core";
import { useSchemeStore } from "../../stores/themeStore";
import { useTranslation } from "react-i18next";

export function ChangeScheme() {
  const { t } = useTranslation("menu");

  const updateScheme = (scheme: any) => {
    schemeStore.updateScheme(scheme);
  };

  const schemeStore = useSchemeStore();
  return (
    <div>
      <Select
        defaultValue={schemeStore.scheme}
        value={schemeStore.scheme}
        w={"200px"}
        data={[
          { label: t("dark"), value: "dark" },
          { label: t("light"), value: "light" },
        ]}
        onChange={updateScheme}
        allowDeselect={false}
      />
    </div>
  );
}
