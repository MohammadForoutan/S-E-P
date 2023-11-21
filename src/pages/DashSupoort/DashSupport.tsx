import { Button, Container, Paper, Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
              <Table.Th ta={"center"}>Element position</Table.Th>
              <Table.Th ta={"center"}>Element name</Table.Th>
              <Table.Th ta={"center"}>Symbol</Table.Th>
              <Table.Th ta={"center"}>Atomic mass</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
          {/* <Table.Caption>Scroll page to see sticky thead</Table.Caption> */}
        </Table>
      </Container>
    </div>
  );
}
