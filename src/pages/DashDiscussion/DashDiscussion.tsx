import { Container } from "@mantine/core";
import { Discussion } from "../../components/Discussion/Discussion";
import { useQuery } from "@tanstack/react-query";
import { httpGetDiscussionId } from "../../../lib";
import { useParams } from "react-router-dom";

const DashDiscussion = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => httpGetDiscussionId(parseInt(id as string, 10)),
    queryKey: ["singleDiscussion", id],
  });

  return (
    <div>
      <Container size={"rem"}>
        <div>
          <Discussion
            data={data.data}
            discussionId={id!}
            created_at={data?.start_time}
            fullname={
              data.data.tickets[0].user?.first_name +
              "  " +
              data.data?.tickets[0].user?.last_name
            }
          />
        </div>
      </Container>
    </div>
  );
};

export { DashDiscussion };
