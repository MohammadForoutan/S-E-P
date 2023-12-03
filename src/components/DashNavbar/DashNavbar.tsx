import { useState } from "react";
import { Group, Code, Box } from "@mantine/core";
import {
  IconBellRinging,
  IconKey,
  IconSettings,
  IconLogout,
  IconHelpCircle,
  IconUser,
} from "@tabler/icons-react";
import classes from "./DashNavbar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const data = [
  {
    link: "/dashboard/notifications",
    label: "notifications",
    icon: IconBellRinging,
  },
  { link: "/dashboard/user", label: "users", icon: IconUser },
  // { link: '/dashboard/security', label: 'security', icon: IconFingerprint },
  // { link: '', label: 'SSH Keys', icon: IconKey },
  // { link: '', label: 'Databases', icon: IconDatabaseImport },
  // { link: '', label: 'Authentication', icon: Icon2fa },
  { link: "/dashboard/setting", label: "settings", icon: IconSettings },
  { link: "/dashboard/support", label: "support", icon: IconHelpCircle },
];

export function DashNavbar() {
  const [active, setActive] = useState("notifications");

  const { t } = useTranslation(["dashboardNav"]);

  const links = data.map((item) => (
    <Link
      to={item.link}
      style={{ marginBottom: "8px" }}
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={(_event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{t(item.label)}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <IconKey size={28} style={{ color: "white" }} />
          <Code fw={700} className={classes.version}>
            v3.1.2
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a> */}

        <Box bg={"red"}>
          <Link to="/" className={classes.logout}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>{t("logout")}</span>
          </Link>
        </Box>
      </div>
    </nav>
  );
}
