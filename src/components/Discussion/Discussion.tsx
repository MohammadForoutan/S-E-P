import { Flex, Group, Paper } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { useLangStore } from "../../stores/langStore";
import { LANGS } from "../../i18n/locales/type";

type Props = {
  fullname: string;
  discussionId: number;
  created_at: Date;
};

export default function Discussion({
  fullname,
  discussionId,
  created_at,
}: Props) {
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
          <p>{fullname}</p>
          <p>{discussionId}</p>
        </Group>
        <Group>
          <p>
            {langStore.lang === LANGS.en_US
              ? new Date(created_at).toLocaleDateString("us-en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })
              : new Date(created_at).toLocaleDateString("fa-ir", {
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
