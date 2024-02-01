import {
  Button,
  Container,
  Group,
  Paper,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SupportData, supportSchema } from "../../../../lib/validation/support";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDiscussion } from "../../../hooks";

function DashSupportForm() {
  const [_loading, _setLoading] = useState(false);
  const { t } = useTranslation("dashSupport");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SupportData>({ resolver: zodResolver(supportSchema) });

  const { isPending: _, onCreateDiscussionSubmit } = useDiscussion();

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
                defaultValue={"technical"}
                data={[
                  { label: t("technical"), value: "technical" },
                  { label: t("financial"), value: "financial" },
                ]}
                allowDeselect={false}
              />
              <Select
                label={t("severity")}
                defaultValue={"low"}
                data={[
                  { label: t("low"), value: "1" },
                  { label: t("med"), value: "3" },
                  { label: t("med"), value: "5" },
                  // { label: t("emergency"), value: "emergency" },
                ]}
                allowDeselect={false}
                error={errors.discussion?.degree_of_importance?.message}
                {...register("discussion.degree_of_importance")}
                onChange={(val: any) => {
                  setValue("discussion.degree_of_importance", val);
                }}
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
