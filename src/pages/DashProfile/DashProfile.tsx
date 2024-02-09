import { Box, Container, Flex, Group, Text } from "@mantine/core";
import { ChangeLanguage } from "../../components/ChangeLanguage/ChangeLanguage";
import { useTranslation } from "react-i18next";
import { ChangeScheme } from "../../components/ChangeColorScheme/ColorScheme";
import { useQuery } from "@tanstack/react-query";
import {
  GetCurrentUserResponse,
  HTTPFailedResponse,
  httpGetCurrentUser,
} from "../../../lib";
import { useLangStore } from "../../stores";
import { LANGS } from "../../i18n/locales/type";

export function DashProfile() {
  const langStore = useLangStore();
  const { t } = useTranslation("dashUser");

  const { data: user } = useQuery<GetCurrentUserResponse, HTTPFailedResponse>({
    queryKey: ["current_user"],
    queryFn: () => httpGetCurrentUser(),
  });

  return (
    <Box p={"lg"}>
      <Box mb={"md"}>
        <Text>{t("first_name")}</Text>
        {user?.first_name || t("unknown")}
      </Box>

      <Box mb={"md"}>
        <Text>{t("last_name")}</Text>
        {user?.last_name || t("unknown")}
      </Box>

      <Box mb={"md"}>
        <Text>{t("username")}</Text>
        {user?.username || t("unknown")}
      </Box>

      <Box mb={"md"}>
        <Text>{t("email")}</Text>
        {user?.email || t("unknown")}
      </Box>

      <Box mb={"md"}>
        <Text>{t("level")}</Text>
        {user?.is_staff ? t("admin") : t("user") || t("unknown")}
      </Box>

      <Box mb={"md"}>
        <Text>{t("join_date")}</Text>
        {user?.date_joined
          ? langStore.lang === LANGS.en_US
            ? new Date(user?.date_joined).toLocaleDateString("en-us", {
                minute: "2-digit",
                hour: "2-digit",
              })
            : new Date(user?.date_joined).toLocaleDateString("fa-ir", {
                minute: "2-digit",
                hour: "2-digit",
              })
          : t("unknown")}
      </Box>
    </Box>
  );
}
