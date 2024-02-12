import { Container } from "@mantine/core";
import { Discussion } from "../../components/Discussion/Discussion";
import { useQuery } from "@tanstack/react-query";
import { httpGetDiscussionId } from "../../../lib";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DashDiscussion = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => httpGetDiscussionId(parseInt(id as string, 10)),
    queryKey: ["singleDiscussion", id],
  });

  useEffect(()=>{
    console.log(data);
  })

  return (
    <div>
      <Container size={"rem"}>
        <div>
          {data ? (
            <Discussion
            data={data}
            discussionId={id!}
            created_at={data?.start_time}
            fullname={
              data.tickets[0].user?.first_name +
              "  " +
              data?.tickets[0].user?.last_name
            }
          />
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export { DashDiscussion };
