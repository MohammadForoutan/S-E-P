import { Select } from "@mantine/core";
import { SCHEME, useSchemeStore } from "../../stores/themeStore";

export function ChagneScheme() {
  const updateScheme = (scheme: SCHEME) => {
    schemeStore.updateScheme(scheme);
  };

  const schemeStore = useSchemeStore();
  return (
    <div>
      <Select
        defaultValue={schemeStore.scheme}
        value={schemeStore.scheme}
        w={"200px"}
        data={[
          { label: "dark", value: "dark" },
          { label: "light", value: "light" },
        ]}
        onChange={updateScheme}
        allowDeselect={false}
      />
    </div>
  );
}
