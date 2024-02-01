import { Container } from "@mantine/core";
import { Discussion } from "../../components/Discussion/Discussion";
import { useQuery } from "@tanstack/react-query";
import { httpGetDiscussionId } from "../../../lib";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DashDiscussion = () => {
  const {id} = useParams()
  
  const { data  } = useQuery({
    queryFn: () => httpGetDiscussionId(id),
    queryKey: ["singleDiscussion"],
  });

  useEffect(()=>{
    console.log(data);
    
  })

  return (
    <div>
      <Container size={"rem"}>
        <div>
          <Discussion
            // discussionId={data?.id}
            created_at={data?.start_time}
            fullname={data?.tickets[0].user?.first_name + "  " +  data?.tickets[0].user?.last_name}
            data={data}
          />
        </div>
      </Container>
    </div>
  );
};

export { DashDiscussion };
