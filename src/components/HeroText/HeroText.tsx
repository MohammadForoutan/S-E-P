import { Title, Text, Button, Container } from "@mantine/core";
import { Dots } from "./../Dots/Dots";
import classes from "./HeroText.module.css";
import { useTranslation } from "react-i18next";
import { useLangStore } from "../../stores/langStore";
import { LANGS } from "../../i18n/locales/type";

export function HeroText() {
  const { t } = useTranslation("home");
  const langStore = useLangStore();
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {t("heroHeading1")}
          <Text component="span" className={classes.highlight} inherit>
            {t("heroHeading2")}
          </Text>
          {t("heroHeading3")}

          {langStore.lang === LANGS.fa_IR ? (
            <Text ta={"center"} className={classes.highlight} inherit>
              {t("heroHeading4")}
            </Text>
          ) : undefined}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            {t("heroDesc")}
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            {t("bookDemo")}
          </Button>
          <Button mx={"sm"} className={classes.control} size="lg">
            {t("purchaseLicense")}
          </Button>
        </div>
      </div>
    </Container>
  );
}
