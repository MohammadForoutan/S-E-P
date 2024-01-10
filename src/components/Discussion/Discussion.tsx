import { Flex, Group, Paper } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { useLangStore } from "../../stores/langStore";
import { LANGS } from "../../i18n/locales/type";
import { DiscussionMessageForm } from "../Forms/DiscussionMessage/DiscussionMessage";

type Props = {
  fullname: string;
  discussionId: number;
  created_at: Date;
};

export function Discussion({ fullname, discussionId, created_at }: Props) {
  const langStore = useLangStore();
  type TMessage = { created_at: Date; content: string; me: boolean };
  const Message = ({ created_at, content, me }: TMessage) => {
    return (
      <Paper
        mb={"5"}
        py={"3"}
        w={"57%"}
        px={"8"}
        bg={me ? "green" : "grape"}
        mr={me ? "auto" : ""}
      >
        <p>{content}</p>
        <span>
          {langStore.lang === LANGS.en_US
            ? new Date(created_at).toLocaleDateString("en-us", {
                minute: "2-digit",
                hour: "2-digit",
              })
            : new Date(created_at).toLocaleDateString("fa-ir", {
                minute: "2-digit",
                hour: "2-digit",
              })}
        </span>
      </Paper>
    );
  };
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
        {/* <Paper bg={"green"} h={900}></Paper> */}
        <main>
          <Message me={true} content="Random text" created_at={new Date()} />
          <Message me={false} content="Random text" created_at={new Date()} />
          <Message me={true} content="Random text" created_at={new Date()} />
          <Message me={false} content="Random text" created_at={new Date()} />
        </main>
      </div>

      <Paper mt={"30px"} mb={"40px"}>
        <DiscussionMessageForm />
      </Paper>
    </Flex>
  );
}
