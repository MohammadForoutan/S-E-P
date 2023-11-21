import {
  Button,
  Group,
  Loader,
  Paper,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function DashSupportForm() {
  const [value, _setValue] = useState("");
  const [loading, _setLoading] = useState(false);
  const { t } = useTranslation("dashSupport");

  return (
    <div>
      <Paper ta={"center"}>
        <h1>{t("create")}</h1>
      </Paper>
      <Paper withBorder p={"20px"}>
        <TextInput
          value={value}
          rightSection={loading ? <Loader size="1rem" /> : null}
          label={t("title")}
          placeholder={t("titlePlace")}
        />

        <Group mt={"8px"} grow>
          <Select
            label={t("department")}
            defaultValue={"technical"}
            data={[
              { label: "فنی", value: "technical" },
              { label: "مالی", value: "financial" },
            ]}
            allowDeselect={false}
          />
          <Select
            label={t("severity")}
            defaultValue={"normal"}
            data={[
              { label: "عادی", value: "normal" },
              { label: "متوسط", value: "medium" },
              { label: "زیاد", value: "high" },
              { label: "ضروری", value: "emergency" },
            ]}
            allowDeselect={false}
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
        />
        <Button mt={"18px"} display={"block"} w={"100%"}>
          {t("submit")}
        </Button>
      </Paper>
    </div>
  );
}

export default DashSupportForm;
