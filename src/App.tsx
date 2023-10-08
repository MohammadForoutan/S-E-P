import "@mantine/core/styles.css";
import { MantineProvider, Switch } from "@mantine/core";
import { theme } from "./theme";
import { Route } from "react-router-dom";
import { Auth } from "./pages/auth/auth";

export default function App() {
  return <MantineProvider theme={theme}>
    <Switch>
      <Route path="/login">
        <Auth />
      </Route>
      <Route path="*">
        <Auth />
      </Route>
    </Switch>
  </MantineProvider>;
}
