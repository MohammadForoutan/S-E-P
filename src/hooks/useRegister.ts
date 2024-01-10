import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  HTTPFailedResponse,
  RegisterData as TForm,
  RegisterResponse,
  httpRegister,
} from "../../lib";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const useRegister = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("auth");
  const registerMutate = useMutation<
    RegisterResponse,
    HTTPFailedResponse,
    TForm
  >({ mutationFn: httpRegister as any });

  const { mutate, isPending } = registerMutate;

  const onRegisterSubmit = (credentialDTO: TForm): void => {
    mutate(credentialDTO, {
      onSuccess: (_data) => {
        void navigate("/auth/login", { replace: true });
      },
      onError: (err) => {
        console.log({ err });
        if (err.response?.status === 400) {
          return toast.error(t("already_register"));
        }
        toast.error(t("internal_error"));
      },
    });
  };

  return { onRegisterSubmit, isPending };
};
