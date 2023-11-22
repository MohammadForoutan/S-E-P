import { Container } from "@mantine/core";
import Discussion from "../../components/Discussion/Discussion";

const DashDiscussion = () => {
  return (
    <div>
      <Container size={"rem"}>
        <div>
          <Discussion id={2} />
        </div>
      </Container>
    </div>
  );
};

export { DashDiscussion };
