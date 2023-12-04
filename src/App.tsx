import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import "./i18n/i18n";
import { useSchemeStore } from "./stores/themeStore";
import { useEffect } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLangStore } from "./stores/langStore";
import { LANGS } from "./i18n/locales/type";

export default function App() {
  const schemeStore = useSchemeStore();
  const langStore = useLangStore();

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
        <ToastContainer
          rtl={langStore.lang === LANGS.fa_IR}
          position="bottom-left"
          toastStyle={{
            textAlign: langStore.lang !== LANGS.fa_IR ? "left" : "right",
          }}
          transition={Zoom}
          // limit={6}
          autoClose={1500}
          theme={schemeStore.scheme}
        />
        <RouterProvider router={router} />
      </MantineProvider>
    </DirectionProvider>
  );
}
