import { Menu, Group, Center, Burger, Container, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './DashHeader.module.css';
import { useLangStore } from '../../stores/langStore';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { LANGS } from '../../i18n/locales/type';

const links = [
    { link: '/about', label: 'Features' },
    {
        link: '#1',
        label: 'Learn',
        links: [
            { link: '/docs', label: 'Documentation' },
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { link: '/about', label: 'About' },
    { link: '/pricing', label: 'Pricing' },
    {
        link: '#2',
        label: 'Support',
        links: [
            { link: '/faq', label: 'FAQ' },
            { link: '/demo', label: 'Book a demo' },
            { link: '/forums', label: 'Forums' },
        ],
    },
];

export function DashHeader() {
    const [opened, { toggle }] = useDisclosure(false);
    const langStore = useLangStore();
    const { t, i18n } = useTranslation(['menu'])
    useEffect(() => {
        i18n.changeLanguage(langStore.lang)
        if (langStore.lang === LANGS.fa_IR) document.body.style.direction = "rtl"
        else document.body.style.direction = "ltr"
    }, [langStore.lang]);

    const changeLang = (lang: LANGS) => {
        i18n.changeLanguage(lang)
        langStore.updateLang(lang);
    }

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

    return (
        <header className={classes.header}>

            <Container size="md">
                <div className={classes.inner}>
                    <div>LOGO</div>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                        <Select
                            defaultValue={"fa_IR"}
                            style={{ width: "100px" }}
                            data={[
                                { label: "فارسی", value: "fa_IR" },
                                { label: "English", value: "en_US" }
                            ]}
                            onChange={changeLang}
                            allowDeselect={false}

                        />
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}