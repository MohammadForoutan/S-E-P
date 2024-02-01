/** @format */

import { Button, Container, Group, Paper, Table } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  httpGetDiscussion,
} from "../../../lib";
import { useQuery } from "@tanstack/react-query";


export function DashSupport() {
  const { data  } = useQuery({
    queryFn: () => httpGetDiscussion(),
    queryKey: ["discussion"],
  });


  const ActionBtn = function ({ id = 4 }: { id?: number }) {
    return (
      <Group gap={6} justify='center'>
        <Button
          onClick={() => navigate(`/dashboard/support/discussion/${id}`)}
          bg={"green"}>
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
            onClick={() => navigate("/dashboard/support/create")}>
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
          <Table.Tbody>
            {data?.results?.length
              ? data?.results?.reverse().map((d : any) => {
                  return (
                    <Table.Tr key={Math.random()}>
                      <Table.Td>{d.id}</Table.Td>
                      <Table.Td>{1}</Table.Td>
                      <Table.Td>{
                        d.degree_of_importance == 1 ? t("low") :
                        d.degree_of_importance == 3 ? t("med") : t("high")

                        }</Table.Td>
                      <Table.Td>{
                        <ActionBtn id={d.id}/>
                        }</Table.Td>
                    </Table.Tr>
                  );
                })
              : 1}
          </Table.Tbody>
          {/* <Table.Caption>Scroll page to see sticky thead</Table.Caption> */}
        </Table>
      </Container>
    </div>
  );
}
