import { Button, Container, Group, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import {
  GetUsersResponse,
  HTTPFailedResponse,
  User,
  httpGetUsers,
} from "../../../lib";
import { useEffect } from "react";
import { IconCheck, IconX } from "@tabler/icons-react";
// import { useNavigate } from "react-router-dom";

function DashUser() {
  const { t } = useTranslation("dashUser");
  const { data: users } = useQuery<GetUsersResponse, HTTPFailedResponse>({
    queryFn: () => httpGetUsers(),
    queryKey: ["users"],
  });

  useEffect(() => {
    console.log({ users });
  }, [users]);

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

  const rows = users?.results.map((user) => (
    <Table.Tr key={user.first_name}>
      <Table.Td>{user.first_name}</Table.Td>
      <Table.Td>{user.last_name}</Table.Td>
      <Table.Td>{user.username}</Table.Td>
      <Table.Td>
        {user.is_staff ? <IconCheck color="green" /> : <IconX color="red" />}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Container>
        <Table striped highlightOnHover ta={"center"}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta={"center"}>{t("first_name")}</Table.Th>
              <Table.Th ta={"center"}>{t("last_name")}</Table.Th>
              <Table.Th ta={"center"}>{t("username")}</Table.Th>
              <Table.Th ta={"center"}>{t("is_staff")}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </div>
  );
}

export { DashUser };
