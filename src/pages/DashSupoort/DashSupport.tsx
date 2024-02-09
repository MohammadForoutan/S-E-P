/** @format */

import { Button, Container, Group, Paper, Table, Text } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { httpGetDiscussion } from "../../../lib";
import { useQuery } from "@tanstack/react-query";
import { useLangStore, useUserStore } from "../../stores";
import { LANGS } from "../../i18n/locales/type";

export function DashSupport() {
  const userStore = useUserStore();
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
  const langStore = useLangStore();
  return (
    <div>
      <Helmet>
        <title>{t("page_title")}</title>
      </Helmet>
      <Container>
        {userStore.role === "user" ? (
          <Paper withBorder m={"md"} p={"md"}>
            <Button
              ff={"peyda bolder"}
              fw={"bold"}
              onClick={() => navigate("/dashboard/support/create")}
            >
              {t("create")}
            </Button>
          </Paper>
        ) : null}
        {data?.results.length > 0 ? (
          <Table striped highlightOnHover ta={"center"}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th ta={"center"}>{t("discussion_id")}</Table.Th>
                <Table.Th ta={"center"}>{t("topic")}</Table.Th>

                {userStore.role === "admin" ? (
                  <Table.Th ta={"center"}>{t("full_name")}</Table.Th>
                ) : null}
                <Table.Th ta={"center"}>{t("is_terminated")}</Table.Th>
                <Table.Th ta={"center"}>{t("department")}</Table.Th>
                <Table.Th ta={"center"}>{t("severity")}</Table.Th>
                <Table.Th ta={"center"}>{t("start_time")}</Table.Th>
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

                        {userStore.role === "admin" ? (
                          <Table.Td>{d.user_username}</Table.Td>
                        ) : null}
                        <Table.Td>
                          <Text color={d.is_terminated ? "red" : "green"}>
                            {d.is_terminated ? t("finish") : t("continue")}
                          </Text>
                        </Table.Td>
                        <Table.Td>
                          <Text>
                            {d.department === "T"
                              ? t("technical")
                              : d.department === "F"
                              ? t("financial")
                              : t("unknown")}
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
                        <Table.Td>
                          {d?.start_time
                            ? langStore.lang === LANGS.en_US
                              ? new Date(d.start_time).toLocaleDateString(
                                  "en-us",
                                  {
                                    minute: "2-digit",
                                    hour: "2-digit",
                                  }
                                )
                              : new Date(d.start_time).toLocaleDateString(
                                  "fa-ir",
                                  {
                                    minute: "2-digit",
                                    hour: "2-digit",
                                  }
                                )
                            : t("unknown")}
                        </Table.Td>
                        <Table.Td>{<ActionBtn id={d.id} />}</Table.Td>
                      </Table.Tr>
                    );
                  })
                : null}
            </Table.Tbody>
            {/* <Table.Caption>Scroll page to see sticky thead</Table.Caption> */}
          </Table>
        ) : (
          <Container>
            <Paper withBorder ta={"center"} p={"md"}>
              <Text>{t("no_data")}</Text>
            </Paper>
          </Container>
        )}
      </Container>
    </div>
  );
}
