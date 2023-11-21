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

function DashSupportForm() {
  const [value, _setValue] = useState("");
  const [loading, _setLoading] = useState(false);

  return (
    <div>
      <Paper ta={"center"}>
        <h1>شروع یک گفت‌وگو جدید</h1>
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
            label={t("section")}
            defaultValue={"technical"}
            data={[
              { label: "فنی", value: "technical" },
              { label: "مالی", value: "financial" },
            ]}
            allowDeselect={false}
          />
          <Select
            label={t("level")}
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
          label="پیام مربوطه"
          description="ابتدا  کار خود را توضیح دهید و مرحله‌ای که دچار مشکل شده‌اید را با جزئیات بیشتر شرح دهید."
          placeholder="پیام شما..."
          autosize
          minRows={6}
          maxRows={14}
        />
        <Button mt={"18px"} display={"block"} w={"100%"}>
          ثبت تیکت
        </Button>
      </Paper>
    </div>
  );
}

export default DashSupportForm;
