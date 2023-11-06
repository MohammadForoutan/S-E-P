import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HomeLayout } from "../Layouts/HomeLayout";

export function Home() {
    const { t, i18n } = useTranslation(['home'])
    const changeLanguageHandler = () => {
        i18n.changeLanguage("de")
    }
    return <HomeLayout>
        <h1>
            {t("welcome")}
        </h1>
    </HomeLayout>
}