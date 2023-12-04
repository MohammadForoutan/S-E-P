import { Button, Container, Group, Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

function DashUser() {
  const { t } = useTranslation("dashUser");
  //   const navigate = useNavigate();

  const ActionBtn = function () {
    const deleteAction = () => {
      toast.error(t("delete_user"), {});
    };
    return (
      <Group gap={6} justify="center">
        <Button onClick={deleteAction} bg={"red"}>
          {t("delete")}
        </Button>
        <Button bg={"green"}>{t("view")}</Button>
      </Group>
    );
  };
  const elements = [
    { position: 6, mass: <ActionBtn />, symbol: "C", name: "Carbon" },
    { position: 7, mass: <ActionBtn />, symbol: "N", name: "Nitrogen" },
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

  return (
    <div>
      <Container>
        <Table striped highlightOnHover ta={"center"}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta={"center"}>{t("user_id")}</Table.Th>
              <Table.Th ta={"center"}>{t("username")}</Table.Th>
              <Table.Th ta={"center"}>{t("severity")}</Table.Th>
              <Table.Th ta={"center"}>{t("action")}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </div>
  );
}

export { DashUser };
