import { Group, Paper } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";

type Props = {
  id: number;
};
export default function Discussion({ id }: Props) {
  return (
    <div>
      <Paper withBorder px={13} mb={12}>
        <Group>
          <IconUserCircle size={37} color="blue" />
          <p>محمدرضا فروتن</p>
          <p>{id}</p>
        </Group>
      </Paper>

      <main>tickets array here - like chats and messages</main>
      <div>ChatBox Component here</div>
    </div>
  );
}
