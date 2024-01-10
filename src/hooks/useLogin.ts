import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  HTTPFailedResponse,
  LoginData as TForm,
  LoginResponse,
  httpLogin,
} from "../../lib";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useUserStore } from "../stores";
import { useStore } from "zustand";

export const useLogin = () => {
  const setLogin = useUserStore((state) => state.login);
  const navigate = useNavigate();
  const { t } = useTranslation("auth");
  const loginMutate = useMutation<LoginResponse, HTTPFailedResponse, TForm>({
    mutationFn: httpLogin as any,
  });

  const { mutate, isPending } = loginMutate;

  const onLoginSubmit = (credentialDTO: TForm): void => {
    mutate(credentialDTO, {
      onSuccess: (data) => {
        setLogin({ access: data.access, refresh: data.refresh });
        toast.success(t("success_login"));
        void navigate("/");
      },
      onError: (err) => {
        console.log({ err });
        if (err.response?.status === 400) {
          return toast.error(t("invalid_credentials"));
        }
        toast.error(t("internal_error"));
      },
    });
  };

  return { onLoginSubmit, isPending };
};
