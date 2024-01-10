import { HomeLayout } from "../Layouts/HomeLayout";
import { Container } from "@mantine/core";
import { HeroText } from "../../components/HeroText/HeroText";

export function Home() {
  return (
    <HomeLayout>
      <Container>
        <HeroText />
      </Container>
    </HomeLayout>
  );
}
