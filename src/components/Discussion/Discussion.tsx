/** @format */
// @ts-nocheck

import { Flex, Group, Paper } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { useLangStore } from "../../stores/langStore";
import { LANGS } from "../../i18n/locales/type";
import { DiscussionMessageForm } from "../Forms/DiscussionMessage/DiscussionMessage";
import { discussion } from "../../../lib";
import { useUserStore } from "../../stores";
import { useEffect, useState } from "react";

type Props = {
  fullname: string;
  discussionId: string;
  created_at: Date;
  data: object & { topic: string };
};

export function Discussion({
  fullname,
  discussionId,
  created_at,
  data,
}: Props) {
  const langStore = useLangStore();
  type TMessage = { created_at: Date; content: string; me: boolean };
  const Message = ({ created_at, content, me }: TMessage) => {
    return (
      <Paper
        mb={"5"}
        py={"3"}
        w={"57%"}
        px={"8"}
        my={"15"}
        bg={me ? "#4527A099" : "#2E7D32"}
        mr={me && langStore.lang == LANGS.fa_IR ? "auto" : ""}
        ml={me && langStore.lang == LANGS.en_US ? "auto" : ""}
      >
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <span style={{ direction: "rtl" }}>
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

  const [caht, setChat] = useState([]);

  useEffect(() => {
    console.log(caht);
  });

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
        <main>
          <Paper withBorder p={"md"} pos={"sticky"} top={0}>
            {data.topic}
          </Paper>
          {data?.tickets?.map((t: any) => {
            return (
              <Message
                key={t.text}
                me={t.user.is_staff}
                content={t.text}
                created_at={t.sent_date}
              />
            );
          })}

          {caht?.map((t: any) => {
            return (
              <Message
                key={Math.random()}
                me={t.user.is_staff}
                content={t.text}
                created_at={t.sent_date}
              />
            );
          })}

          {/* {caht?.text ? (
            <Message
              me={caht?.user.is_staff}
              content={caht?.text}
              created_at={caht?.sent_date}
            />
          ) : null} */}

          {/* {caht?.map((t: any) => {
            return (
              <Message
                key={t.text}
                me={t.user.is_staff}
                content={t.text}
                created_at={t.sent_date}
              />
            );
          })} */}

          {/* <Message me={false} content="Random text" created_at={new Date()} />
          <Message me={true} content="Random text" created_at={new Date()} />
          <Message me={false} content="Random text" created_at={new Date()} /> */}
        </main>
      </div>

      <Paper mt={"30px"} mb={"40px"}>
        <DiscussionMessageForm setChat={setChat} />
      </Paper>
    </Flex>
  );
}
