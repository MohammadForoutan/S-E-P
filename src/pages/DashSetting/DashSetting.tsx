import { Group, Stack, Text } from "@mantine/core";
import { ChangeLanguage } from "../../components/ChangeLanguage/ChangeLanguage";
import { useTranslation } from "react-i18next";

export function DashSetting() {
  const { t } = useTranslation("dashSetting");

  return (
    <Group grow>
      <Stack>
        <div>
          <Text>{t("lang")}</Text>
          <ChangeLanguage />
        </div>
      </Stack>
      <Stack>2</Stack>
    </Group>
  );
}
