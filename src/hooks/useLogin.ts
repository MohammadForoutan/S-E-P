import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  HTTPFailedResponse,
  LoginData as TForm,
  LoginResponse,
  httpLogin,
  httpGetCurrentUser,
  GetCurrentUserResponse,
} from "../../lib";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useUserStore } from "../stores";

export const useLogin = () => {
  const setLogin = useUserStore((state) => state.login);
  const setRole = useUserStore((state) => state.setRole);
  const setUsername = useUserStore((state) => state.setUsername);
  const setFullName = useUserStore((state) => state.setFullName);
  const navigate = useNavigate();
  const { t } = useTranslation("auth");
  const loginMutate = useMutation<LoginResponse, HTTPFailedResponse, TForm>({
    mutationFn: httpLogin as any,
  });

  const { mutate, isPending } = loginMutate;

  const onLoginSubmit = (credentialDTO: TForm): void => {
    mutate(credentialDTO, {
      onSuccess: async (data) => {
        setLogin({ access: data.access, refresh: data.refresh });
        const user: GetCurrentUserResponse = await httpGetCurrentUser();
        // set role
        const role = user.is_staff ? "admin" : "user";
        setRole(role);
        setUsername(user.username);
        setFullName(user.first_name, user.last_name);

        toast.success(t("success_login"));
        void navigate("/");
      },
      onError: (err) => {
        console.log({ err });
        if (err.response?.status >= 400) {
          return toast.error(t("invalid_credentials"));
        }
        return toast.error(t("internal_error"));
      },
    });
  };

  return { onLoginSubmit, isPending };
};
