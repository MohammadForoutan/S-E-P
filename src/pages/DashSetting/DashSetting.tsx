import { Group, Select, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useLangStore } from "../../stores/langStore";
import { useEffect } from "react";
import { LANGS } from "../../i18n/locales/type";

export function DashSetting() {
    const { t, i18n } = useTranslation("dashSetting")
    const langStore = useLangStore();

    useEffect(() => {
        i18n.changeLanguage(langStore.lang)
        if (langStore.lang === LANGS.fa_IR) document.body.style.direction = "rtl"
        else document.body.style.direction = "ltr"
    }, [langStore.lang, i18n]);

    const changeLang = (lang: LANGS) => {
        i18n.changeLanguage(lang)
        langStore.updateLang(lang);
    }

    return (
        <Group grow>
            <Stack>
                <Select
                    label={<b>{t("lang")} </b>}
                    defaultValue={langStore.lang}
                    value={langStore.lang}
                    w={"200px"}
                    data={[
                        { label: "فارسی", value: "fa_IR" },
                        { label: "English", value: "en_US" }
                    ]}
                    onChange={changeLang}
                    allowDeselect={false}
                />
            </Stack>
            <Stack>2</Stack>
        </Group>
    )
}