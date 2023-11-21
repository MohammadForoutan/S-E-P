import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import "./i18n/i18n";
import { useSchemeStore } from "./stores/themeStore";
import { useEffect } from "react";
export default function App() {
  const schemeStore = useSchemeStore();

  useEffect(() => {
    console.log(schemeStore.scheme);
  }, [schemeStore.scheme]);
  return (
    <DirectionProvider initialDirection="rtl" detectDirection={true}>
      <MantineProvider
        defaultColorScheme={"dark"}
        forceColorScheme={schemeStore.scheme}
        theme={theme}
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </DirectionProvider>
  );
}
