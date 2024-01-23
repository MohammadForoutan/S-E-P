import { HomeLayout } from "../Layouts/HomeLayout";
import { Container } from "@mantine/core";
import { HeroText } from "../../components/HeroText/HeroText";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation("home");
  return (
    <HomeLayout>
      <Helmet>
        <title>{t("page_title")}</title>
      </Helmet>
      <Container>
        <HeroText />
      </Container>
    </HomeLayout>
  );
}
