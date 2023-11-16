import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HomeLayout } from "../Layouts/HomeLayout";
import { Container } from "@mantine/core";

export function Home() {
  const { t, i18n } = useTranslation(["home"]);
  return (
    <HomeLayout>
      <Container>
        <h1 style={{ fontWeight: "bold" }}>
          <b>{t("welcome")}</b>
        </h1>
      </Container>
    </HomeLayout>
  );
}
