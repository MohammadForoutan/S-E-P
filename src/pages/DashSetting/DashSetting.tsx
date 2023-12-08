import { Container, Group, Text } from "@mantine/core";
import { ChangeLanguage } from "../../components/ChangeLanguage/ChangeLanguage";
import { useTranslation } from "react-i18next";

export function DashSetting() {
  const { t } = useTranslation("dashSetting");

  return (
    <Container>
        <Group grow>
          <div>
            <Text>{t("lang")}</Text>
            <ChangeLanguage />
          </div>
          <div>2</div>
        </Group>
    </Container>
  );
}
