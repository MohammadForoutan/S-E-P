import {
  Button,
  Container,
  Group,
  Paper,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SupportData, supportSchema } from "../../../../lib/validation/support";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDiscussion } from "../../../hooks";
import { useEffect } from "react";

function DashSupportForm() {
  const { t } = useTranslation("dashSupport");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SupportData>({ resolver: zodResolver(supportSchema) });

  useEffect(() => {
    setValue("discussion.degree_of_importance", "1");
    setValue("discussion.department", "T");
  }, []);

  useEffect(() => {
    console.log({ errors });
  }, [errors]);
  const { onCreateDiscussionSubmit } = useDiscussion();

  return (
    <div>
      <Container>
        <Paper ta={"center"}>
          <h1>{t("create")}</h1>
        </Paper>
        <Paper withBorder p={"20px"}>
          <form onSubmit={handleSubmit(onCreateDiscussionSubmit)}>
            <TextInput
              // rightSection={loading ? <Loader size="1rem" /> : null}
              label={t("title")}
              placeholder={t("titlePlace")}
              error={errors.discussion?.topic?.message}
              {...register("discussion.topic")}
            />

            <Group mt={"8px"} grow>
              <Select
                label={t("department")}
                defaultValue={"T"}
                data={[
                  { label: t("technical"), value: "T" },
                  { label: t("financial"), value: "F" },
                ]}
                allowDeselect={false}
                {...register("discussion.department")}
                onChange={(val: unknown) =>
                  setValue("discussion.department", val as string)
                }
              />
              <Select
                label={t("severity")}
                defaultValue={"1"}
                error={errors.discussion?.degree_of_importance?.message}
                data={[
                  { label: t("low"), value: "1" },
                  { label: t("med"), value: "3" },
                  { label: t("high"), value: "5" },
                ]}
                allowDeselect={false}
                {...register("discussion.degree_of_importance")}
                onChange={(val: unknown) =>
                  setValue("discussion.degree_of_importance", val as string)
                }
              />
            </Group>

            <Textarea
              mt={"8px"}
              label={t("message")}
              description={t("explain")}
              placeholder={t("yourMessage")}
              autosize
              minRows={6}
              maxRows={14}
              error={errors.ticket?.text?.message}
              {...register("ticket.text")}
            />
            <Button mt={"18px"} type="submit" display={"block"} w={"100%"}>
              {t("submit")}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default DashSupportForm;
