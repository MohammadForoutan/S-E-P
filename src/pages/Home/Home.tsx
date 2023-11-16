import { useTranslation } from "react-i18next";
import { HomeLayout } from "../Layouts/HomeLayout";
import { Container } from "@mantine/core";
import { Link } from "react-router-dom";

export function Home() {
  const { t } = useTranslation(["home"]);
  return (
    <HomeLayout>
      <Container>
        <h1 style={{ fontWeight: "bold" }}>
          <b>{t("welcome")}</b>
        </h1>
        <Link to={"/dashboard"}>
          <b>{t("dashboard")}</b>
        </Link>
      </Container>
    </HomeLayout>
  );
}
