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
import classes from "../Login/Login.module.css";
import { HomeLayout } from "../Layouts/HomeLayout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, registerSchema } from "@lib/validation";
import { useRegister } from "../../hooks";
import { Helmet } from "react-helmet";

export function Register() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const { isPending: _, onRegisterSubmit } = useRegister();

  return (
    <HomeLayout>
      <Helmet>
        <title>{t("page_title")}</title>
      </Helmet>
      <div className={classes.bg}>
        <Container size={420} py={40} pb={90}>
          <Title ta="center" className={classes.title}>
            {t("register")} &ndash; {t("welcome")}
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
            {t("haveAccount")}
            <Anchor
              fw={"800"}
              c={"blue"}
              size="sm"
              component="button"
              px={2}
              onClick={() => navigate("/auth/login")}
            >
              {t("loginAccount")}
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={18} radius="md">
            <form onSubmit={handleSubmit(onRegisterSubmit)}>
              <TextInput
                label={t("email")}
                placeholder="you@mantine.dev"
                error={errors.email?.message}
                required
                {...register("email")}
              />
              <TextInput
                label={t("first_name")}
                placeholder={t("first_name_place")}
                mt={"md"}
                error={errors.first_name?.message}
                required
                {...register("first_name")}
              />
              <TextInput
                label={t("last_name")}
                placeholder={t("last_name_place")}
                mt={"md"}
                error={errors.last_name?.message}
                required
                {...register("last_name")}
              />
              <TextInput
                label={t("username")}
                placeholder={t("username_place")}
                error={errors.username?.message}
                mt="md"
                required
                {...register("username")}
              />
              <PasswordInput
                label={t("password")}
                placeholder={t("password")}
                mt="md"
                error={errors.password?.message}
                required
                {...register("password")}
              />
              <PasswordInput
                label={t("confirm_password")}
                placeholder={t("confirm_password")}
                mt="md"
                required
                error={errors.password_confirmation?.message}
                {...register("password_confirmation")}
              />
              <Group mt="lg">
                <Checkbox label={t("remember")} />
              </Group>
              <Button fullWidth mt="xl" type="submit">
                {t("register")}
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </HomeLayout>
  );
}
