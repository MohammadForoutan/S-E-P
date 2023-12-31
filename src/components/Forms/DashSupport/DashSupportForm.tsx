import {
  Button,
  Container,
  Group,
  Loader,
  Paper,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SupportData, supportSchema } from "../../../../lib/validation/support";
import { zodResolver } from "@hookform/resolvers/zod";
import { httpCreateSupport } from "../../../../lib";


function DashSupportForm() {
  const [loading, _setLoading] = useState(false);
  const { t } = useTranslation("dashSupport");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm<SupportData>({ resolver: zodResolver(supportSchema) });


  const submitLoginForm = async (data: SupportData) => {
    console.log({ data, isValid: true });
    try {
      const res = await httpCreateSupport(data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    // console.log(errors);
    console.log(getValues());
  })

  return (
    <div>
      <Container>
        <Paper ta={"center"}>
          <h1>{t("create")}</h1>
        </Paper>
        <Paper withBorder p={"20px"}>
        <form onSubmit={handleSubmit(submitLoginForm)}>
          <TextInput
            // rightSection={loading ? <Loader size="1rem" /> : null}
            label={t("title")}
            placeholder={t("titlePlace")}
            error={!!errors.discussion?.topic && 
              errors.discussion?.topic.message}
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
                { label: t("low"), value: "low" },
                { label: t("med"), value: "medium" },
                { label: t("high"), value: "high" },
                { label: t("emergency"), value: "emergency" },
              ]}
              allowDeselect={false}
              error={!!errors.discussion?.degree_of_importance && errors.discussion?.degree_of_importance.message}
              {...register("discussion.degree_of_importance")}
              onChange={(val : any)=>{
                setValue("discussion.degree_of_importance",val)
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
            error={!!errors.ticket?.text &&
               errors.ticket?.text.message}
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
