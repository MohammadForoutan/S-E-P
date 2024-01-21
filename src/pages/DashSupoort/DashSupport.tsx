import { Button, Container, Group, Paper, Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function DashSupport() {
  const ActionBtn = function ({ id = 4 }: { id?: number }) {
    return (
      <Group gap={6} justify="center">
        <Button
          onClick={() => navigate(`/dashboard/support/discussion/${id}`)}
          bg={"green"}
        >
          {t("view")}
        </Button>
      </Group>
    );
  };
  const elements = [
    {
      position: 6,
      mass: <ActionBtn id={112} />,
      symbol: "C",
      name: "علی زارعی",
    },
    {
      position: 7,
      mass: <ActionBtn id={151} />,
      symbol: "N",
      name: "یاسر دهقان",
    },
    { position: 39, mass: <ActionBtn />, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: <ActionBtn />, symbol: "Ba", name: "Barium" },
    { position: 58, mass: <ActionBtn />, symbol: "Ce", name: "Cerium" },
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
  // const [data, setData] = useState<string[]>([]);
  const { t } = useTranslation("dashSupport");
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Paper withBorder m={"md"} p={"md"}>
          <Button
            ff={"peyda bolder"}
            fw={"bold"}
            onClick={() => navigate("/dashboard/support/create")}
          >
            {t("create")}
          </Button>
        </Paper>
        <Table striped highlightOnHover ta={"center"}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta={"center"}>{t("discussion_id")}</Table.Th>
              <Table.Th ta={"center"}>{t("full_name")}</Table.Th>
              <Table.Th ta={"center"}>{t("severity")}</Table.Th>
              <Table.Th ta={"center"}>{t("action")}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
          {/* <Table.Caption>Scroll page to see sticky thead</Table.Caption> */}
        </Table>
      </Container>
    </div>
  );
}
