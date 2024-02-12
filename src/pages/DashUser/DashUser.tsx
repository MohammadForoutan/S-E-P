//@ts-nocheck
import {
  Box,
  Button,
  Container,
  Group,
  Modal,
  Table,
  Text,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  GetUserResponse,
  GetUsersResponse,
  HTTPFailedResponse,
  httpGetUser,
  httpGetUsers,
} from "../../../lib";
import { useState } from "react";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";

function DashUser() {
  const { t } = useTranslation("dashUser");
  const { data: users } = useQuery<GetUsersResponse, HTTPFailedResponse>({
    queryFn: () => httpGetUsers(),
    queryKey: ["users"],
  });
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedUser, setSelectedUser] = useState<GetUserResponse>();
  const openModal = async (_id: number) => {
    // get user from api with useUserHook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const user = await httpGetUser({ userId: _id });
    // set user with setSelectedUser
    setSelectedUser(user);
    // open modal
    open();
  };

  const ActionBtn = function (_user: { user: GetUserResponse }) {
    // console.log(_user.user.id);

    return (
      <Group gap={6} justify="center">
        {/* <Button bg={"green"} onClick={() => openModal(user.id ??)}> */}
        <Button bg={"green"} onClick={() => openModal(_user.user.id)}>
          {t("view")}
        </Button>
      </Group>
    );
  };

  const rows = users?.results.map((user) => (
    <Table.Tr key={user.username}>
      <Table.Td>{user.first_name}</Table.Td>
      <Table.Td>{user.last_name}</Table.Td>
      <Table.Td>{user.username}</Table.Td>
      <Table.Td>
        {user.is_staff ? <IconCheck color="green" /> : <IconX color="red" />}
      </Table.Td>
      <Table.Td>
        <ActionBtn user={user} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Helmet>
        <title>{t("page_title")}</title>
      </Helmet>
      <Container>
        <Modal
          opened={opened}
          onClose={close}
          title={t("user_info")}
          transitionProps={{ transition: "fade", duration: 200 }}
        >
          <p>
            {t("first_name")} : &nbsp; {selectedUser?.first_name}
          </p>
          <p>
            {t("last_name")} : &nbsp; {selectedUser?.last_name}
          </p>
          <p>
            {t("username")} : &nbsp; {selectedUser?.username}
          </p>
          <p>
            {t("email")} : &nbsp; {selectedUser?.email}
          </p>
          <Text display={"flex"}>
            <Box>{t("is_staff")}: </Box>
            {selectedUser?.is_staff ? (
              <IconCheck color="green" />
            ) : (
              <IconX color="red" />
            )}
          </Text>
        </Modal>
        <Table striped highlightOnHover ta={"center"}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta={"center"}>{t("first_name")}</Table.Th>
              <Table.Th ta={"center"}>{t("last_name")}</Table.Th>
              <Table.Th ta={"center"}>{t("username")}</Table.Th>
              <Table.Th ta={"center"}>{t("is_staff")}</Table.Th>
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
