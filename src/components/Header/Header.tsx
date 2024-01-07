import { Menu, Group, Center, Burger, Container, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import { ChangeScheme } from "../ChangeColorScheme/ColorScheme";
import { useUserStore } from "../../stores";
import { Logo } from "../Logo/Logo";
export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const { t } = useTranslation(["menu"]);

  const links: any = [
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

  const items = links.map((link: any) => {
    const menuItems = link.links?.map((item: any) => (
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
  const userStore = useUserStore();
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}

          <Group gap={5} visibleFrom="sm">
            <Logo />
            {items}
          </Group>

          <Group visibleFrom="md">
            <ChangeLanguage />
            <ChangeScheme />

            {!userStore.isAuthenticated ? (
              <>
                <Button
                  variant="default"
                  onClick={() => navigate("/auth/login")}
                >
                  {t("login")}
                </Button>
                <Button onClick={() => navigate("/auth/register")}>
                  {t("register")}
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/dashboard")}>
                {t("dashboard")}
              </Button>
            )}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
