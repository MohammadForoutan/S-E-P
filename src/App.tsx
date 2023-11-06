import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import "./i18n/i18n"
export default function App() {

  return (
    <DirectionProvider initialDirection="rtl" detectDirection={true}>
      <MantineProvider theme={theme} >
        <RouterProvider router={router} />
      </MantineProvider>
    </DirectionProvider>
  );
}
