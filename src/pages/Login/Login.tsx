import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./Login.module.css";
import { HomeLayout } from "../Layouts/HomeLayout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <div className={classes.bg}>
        <Container size={420} py={40} pb={90}>
          <Title ta="center" className={classes.title}>
            {t("login")} &ndash; {t("welcome")}
          </Title>
          <Text
            bg={"white"}
            c="black"
            size="sm"
            ta="center"
            mt={5}
            p={3}
            py={7}
          >
            {t("dontHaveAccount")}
            <Anchor
              fw={"800"}
              c={"blue"}
              size="sm"
              component="button"
              px={2}
              onClick={() => navigate("/auth/register")}
            >
              {t("createAccount")}
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={18} radius="md">
            <TextInput
              label={t("email")}
              placeholder="you@mantine.dev"
              required
            />
            <PasswordInput
              label={t("password")}
              placeholder={t("password")}
              required
              mt="md"
            />
            <Group justify="space-between" mt="lg">
              <Checkbox label={t("remember")} />
              <Anchor component="button" size="sm" fw={800}>
                {t("forget")}
              </Anchor>
            </Group>
            <Button fullWidth mt="xl">
              {t("login")}
            </Button>
          </Paper>
        </Container>
      </div>
    </HomeLayout>
  );
}
