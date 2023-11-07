import { Menu, Group, Center, Burger, Container, Button, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Icon3dCubeSphere, IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { LANGS } from '../../i18n/locales/type';
import { useNavigate } from 'react-router-dom';
import { useLangStore } from '../../stores/langStore';
export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const langStore = useLangStore();
    const { t, i18n } = useTranslation(['menu'])
    useEffect(() => {
        i18n.changeLanguage(langStore.lang)
        if (langStore.lang === LANGS.fa_IR) document.body.style.direction = "rtl"
        else document.body.style.direction = "ltr"
    }, [langStore.lang, i18n]);

    const changeLang = (lang: LANGS) => {
        i18n.changeLanguage(lang)
        langStore.updateLang(lang);
    }


    const links = [
        { link: '/about', label: t("about") },
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
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    const navigate = useNavigate()
    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    {/* <MantineLogo size={28} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

                    <Group>
                        <Select
                            defaultValue={langStore.lang}
                            value={langStore.lang}
                            w={"100px"}
                            data={[
                                { label: "فارسی", value: "fa_IR" },
                                { label: "English", value: "en_US" }
                            ]}
                            onChange={changeLang}
                            allowDeselect={false}
                        />
                    </Group>

                    <Group visibleFrom="md">
                        <Button variant="default" onClick={() => navigate("/auth/login")}>{t('login')}</Button>
                        <Button onClick={() => navigate("/auth/register")}>{t('register')}</Button>
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header >
    );
}