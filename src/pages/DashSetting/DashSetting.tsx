import { Container, Group, Text } from "@mantine/core";
import { ChangeLanguage } from "../../components/ChangeLanguage/ChangeLanguage";
import { useTranslation } from "react-i18next";
import { ChangeScheme } from "../../components/ChangeColorScheme/ColorScheme";

export function DashSetting() {
  const { t } = useTranslation("dashSetting");

  return (
    <Container>
      <Group grow>
        <div>
          <Text className="bolder">{t("lang")}</Text>
          <ChangeLanguage />
        </div>
        <div>
          <Text className="bolder">{t("theme")}</Text>
          <ChangeScheme />
        </div>
      </Group>
    </Container>
  );
}
