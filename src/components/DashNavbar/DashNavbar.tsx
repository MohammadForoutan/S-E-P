import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
} from '@tabler/icons-react';
import classes from './DashNavbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const data = [
    { link: '/dashboard/notifications', label: 'notifications', icon: IconBellRinging },
    { link: '/dashboard/billing', label: 'billing', icon: IconReceipt2 },
    { link: '/dashboard/security', label: 'security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '/dashboard/setting', label: 'settings', icon: IconSettings },
];

export function DashNavbar() {
    const [active, setActive] = useState('notifications');
    const navigate = useNavigate()
    const { t } = useTranslation(["dashboardNav"])

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
                navigate(item.link)
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{t(item.label)}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <IconKey size={28} style={{ color: 'white' }} />
                    <Code fw={700} className={classes.version}>
                        v3.1.2
                    </Code>
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}