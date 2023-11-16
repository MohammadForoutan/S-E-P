import { Flex, Stack } from "@mantine/core";
import { DashNavbar } from "../../components/DashNavbar/DashNavbar";
import { DashHeader } from "../../components/DashHeader/DashHeader";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};
export function Dashboard({ children }: Props) {
  return (
    <Flex gap={0}>
      <DashNavbar />
      <Stack w={"100%"} justify="flex-start">
        <DashHeader />
        <Flex direction={"column"} px={13}>
          {children}
          <Outlet />
        </Flex>
      </Stack>
    </Flex>
  );
}
