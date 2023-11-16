import { useState } from "react";
import {
  Button,
  Group,
  Loader,
  Paper,
  Select,
  Table,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

export function DashSupport() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  // const _timeoutRef = useRef<number>(-1);
  const [value, _setValue] = useState("");
  const [loading, _setLoading] = useState(false);
  // const [data, setData] = useState<string[]>([]);
  const { t } = useTranslation("dashSupport");
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
      <Table striped highlightOnHover ta={"center"}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta={"center"}>Element position</Table.Th>
            <Table.Th ta={"center"}>Element name</Table.Th>
            <Table.Th ta={"center"}>Symbol</Table.Th>
            <Table.Th ta={"center"}>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        {/* <Table.Caption>Scroll page to see sticky thead</Table.Caption> */}
      </Table>
    </div>
  );
}
