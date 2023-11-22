import { Flex, Grid, Group, Paper } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { useLangStore } from "../../stores/langStore";
import { LANGS } from "../../i18n/locales/type";

type Props = {
  id: number;
};
export default function Discussion({ id }: Props) {
  const langStore = useLangStore();
  return (
    <Flex direction={"column"}>
      <Paper
        style={{ justifyContent: "space-between" }}
        display={"flex"}
        withBorder
        px={13}
        mb={12}
      >
        <Group>
          <IconUserCircle size={37} color="blue" />
          <p>محمدرضا فروتن</p>
          <p>{id}</p>
        </Group>
        <Group>
          <p>
            {langStore.lang === LANGS.en_US
              ? new Date().toLocaleDateString("us-en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })
              : new Date().toLocaleDateString("fa-ir", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
          </p>
        </Group>
      </Paper>

      <div>
        <Paper bg={"green"} h={900}></Paper>
        <main>tickets array here - like chats and messages</main>
      </div>

      <Paper
        withBorder
        mt={"auto"}
        bg={"gray"}
        p={12}
        pos={"sticky"}
        w={"100%"}
      >
        <div>ChatBox Component here</div>
      </Paper>
    </Flex>
  );
}
