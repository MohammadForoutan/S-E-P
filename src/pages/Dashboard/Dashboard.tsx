import { Flex, Stack } from "@mantine/core";
import { DashNavbar } from "../../components/DashNavbar/DashNavbar";
import { DashHeader } from "../../components/DashHeader/DashHeader";
import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <Flex gap={0}>
      <DashNavbar />
      <Stack w={"100%"} justify="flex-start">
        <DashHeader />
        <Flex direction={"column"} px={13}>
          <Outlet />
        </Flex>
      </Stack>
    </Flex>
  );
}
