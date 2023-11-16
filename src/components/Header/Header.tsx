import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Button,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon3dCubeSphere, IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LANGS } from "../../i18n/locales/type";
import { Link, useNavigate } from "react-router-dom";
import { useLangStore } from "../../stores/langStore";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const { t } = useTranslation(["menu"]);

  const links = [
    { link: "/", label: t("home") },
    { link: "/about", label: t("about") },
    { link: "/contact", label: t("contact") },
    // {
    //     link: '#1',
    //     label: 'Learn',
    //     links: [
    //         { link: '/docs', label: 'Documentation' },
    //         { link: '/resources', label: 'Resources' },
    //         { link: '/community', label: 'Community' },
    //         { link: '/blog', label: 'Blog' },
    //     ],
    // },
    // { link: '/pricing', label: 'Pricing' },
    // {
    //     link: '#2',
    //     label: 'Support',
    //     links: [
    //         { link: '/faq', label: 'FAQ' },
    //         { link: '/demo', label: 'Book a demo' },
    //         { link: '/forums', label: 'Forums' },
    //     ],
    // },
  ];

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          {/* <Menu.Target> */}
          <Link to={link.link} className={classes.link}>
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
              <IconChevronDown size="0.9rem" stroke={1.5} />
            </Center>
          </Link>
          {/* </Menu.Target> */}
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-aperture"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M3.6 15h10.55" />
            <path d="M6.551 4.938l3.26 10.034" />
            <path d="M17.032 4.636l-8.535 6.201" />
            <path d="M20.559 14.51l-8.535 -6.201" />
            <path d="M12.257 20.916l3.261 -10.034" />
          </svg>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <ChangeLanguage />

          <Group visibleFrom="md">
            <Button variant="default" onClick={() => navigate("/auth/login")}>
              {t("login")}
            </Button>
            <Button onClick={() => navigate("/auth/register")}>
              {t("register")}
            </Button>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
