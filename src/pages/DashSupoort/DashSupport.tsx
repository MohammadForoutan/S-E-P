/** @format */

import { Button, Container, Group, Paper, Table, Text } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { httpGetDiscussion } from "../../../lib";
import { useQuery } from "@tanstack/react-query";

export function DashSupport() {
  const { data } = useQuery({
    queryFn: () => httpGetDiscussion(),
    queryKey: ["discussion"],
  });

  console.log({ data });

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

  const { t } = useTranslation("dashSupport");
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>{t("page_title")}</title>
      </Helmet>
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
              <Table.Th ta={"center"}>{t("topic")}</Table.Th>
              <Table.Th ta={"center"}>{t("full_name")}</Table.Th>
              <Table.Th ta={"center"}>{t("is_terminated")}</Table.Th>
              <Table.Th ta={"center"}>{t("severity")}</Table.Th>
              <Table.Th ta={"center"}>{t("action")}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data?.results?.length
              ? data?.results?.reverse().map((d: any) => {
                  return (
                    <Table.Tr key={Math.random()}>
                      <Table.Td>{d.id}</Table.Td>
                      <Table.Td>{d.topic}</Table.Td>
                      <Table.Td>{1}</Table.Td>
                      <Table.Td>
                        <Text color={d.is_terminated ? "red" : "green"}>
                          {d.is_terminated ? t("finish") : t("continue")}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        {d.degree_of_importance == 1 ? (
                          <Text color="green">{t("low")}</Text>
                        ) : d.degree_of_importance == 3 ? (
                          <Text color="yellow">{t("med")}</Text>
                        ) : (
                          <Text color="red">{t("high")}</Text>
                        )}
                      </Table.Td>
                      <Table.Td>{<ActionBtn id={d.id} />}</Table.Td>
                    </Table.Tr>
                  );
                })
              : null}
          </Table.Tbody>
          {/* <Table.Caption>Scroll page to see sticky thead</Table.Caption> */}
        </Table>
      </Container>
    </div>
  );
}
