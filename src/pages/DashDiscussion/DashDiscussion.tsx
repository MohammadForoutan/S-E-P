import { Container } from "@mantine/core";
import { Discussion } from "../../components/Discussion/Discussion";

const DashDiscussion = () => {
  return (
    <div>
      <Container size={"rem"}>
        <div>
          <Discussion
            discussionId={2}
            created_at={new Date()}
            fullname="محمد فروتن"
          />
        </div>
      </Container>
    </div>
  );
};

export { DashDiscussion };
