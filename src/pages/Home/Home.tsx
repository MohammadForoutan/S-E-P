import { useTranslation } from "react-i18next";
import { HomeLayout } from "../Layouts/HomeLayout";
import { Container, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { HeroText } from "../../components/HeroText/HeroText";

export function Home() {
  const { t } = useTranslation(["home"]);
  return (
    <HomeLayout>
      <Container>
        {/* <h1 style={{ fontWeight: "bold" }}>
          <b>{t("welcome")}</b>
        </h1> */}
        <HeroText />
        <Text bg={"violet"} w={"300"} p={10} mb={"lg"} ta={"center"} mx={"auto"} 
        style={{borderRadius: "5px"}}>
          <Link to={"/dashboard"} style={{color: "white"}}>
            <b>{t("dashboard")}</b>
          </Link>
        </Text>
      </Container>
    </HomeLayout>
  );
}
