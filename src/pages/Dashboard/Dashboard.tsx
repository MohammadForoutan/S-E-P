import { Flex, Stack } from "@mantine/core";
import { DashNavbar } from "../../components/DashNavbar/DashNavbar";
import { DashHeader } from "../../components/DashHeader/DashHeader";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export function Dashboard() {
  const { t } = useTranslation("dashboard");
  return (
    <Flex gap={0}>
      <DashNavbar />
      <Helmet>
        <title>{t("page_title")}</title>
      </Helmet>
      <Stack w={"100%"} justify="flex-start">
        <DashHeader />
        <Flex direction={"column"} px={13}>
          <Outlet />
        </Flex>
      </Stack>
    </Flex>
  );
}
