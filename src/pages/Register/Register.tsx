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
import { LANGS } from "../../i18n/locales/type";
import { useLangStore } from "../../stores/langStore";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, registerSchema } from "@lib/validation";
import { httpRegister } from "../../../lib";
import { toast } from "react-toastify";
import { useEffect } from "react";

export function Register() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const langStore = useLangStore();

  // const {} = useMutation({ mutationFn: "", mutationKey: ["Register"] });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const submitRegisterForm = (data: RegisterData) => {
    console.log({ data, isValid: true });
    httpRegister(data)
    toast.success(' ثبت نام موفیت آمیز بود شیطون', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // progress: undefined,
      theme: "dark",
      });
    navigate("/auth/login")
  };



  return (
    <HomeLayout>
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
            <form onSubmit={handleSubmit(submitRegisterForm)}>
              <TextInput
                label={t("email")}
                placeholder="you@mantine.dev"
                error={!!errors.email && errors.email.message}
                {...register("email")}
              />
              <TextInput
                label={t("first_name")}
                placeholder={t("first_name_place")}
                mt={"md"}
                error={!!errors.first_name && errors.first_name.message}
                {...register("first_name")}
              />
              <TextInput
                label={t("last_name")}
                placeholder={t("last_name_place")}
                mt={"md"}
                error={!!errors.last_name && errors.last_name.message}
                {...register("last_name")}
              />
              <TextInput
                label={t("username")}
                placeholder={t("username_place")}
                error={!!errors.username && errors.username.message}
                mt="md"
                {...register("username")}
              />
              <PasswordInput
                label={t("password")}
                placeholder={t("password")}
                mt="md"
                error={!!errors.password && errors.password.message}
                {...register("password")}
              />
              <PasswordInput
                label={t("confirm_password")}
                placeholder={t("confirm_password")}
                mt="md"
                error={
                  !!errors.password_confirmation &&
                  errors.password_confirmation.message
                }
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
