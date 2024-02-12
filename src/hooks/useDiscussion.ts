import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  HTTPFailedResponse,
  SupportData as TForm,
  CreateDiscussionResponse,
  httpCreateDiscussion,
} from "../../lib";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const useDiscussion = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("dashSupport");
  const discussionMutate = useMutation<
    CreateDiscussionResponse,
    HTTPFailedResponse,
    TForm
  >({
    mutationFn: httpCreateDiscussion as any,
  });

  const { mutate, isPending } = discussionMutate;

  const onCreateDiscussionSubmit = (credentialDTO: TForm): void => {
    mutate(credentialDTO, {
      onSuccess: (data) => {
        toast.success(t("discussion_created"));
        void navigate(`/dashboard/support/discussion/${data.data!.id}`);
      },
      onError: (err) => {
        console.log({ err });
        if (err.response?.status === 400) {
          return toast.error(t("invalid_input"));
        }
        toast.error(t("internal_error"));
      },
    });
  };

  return { onCreateDiscussionSubmit, isPending };
};
