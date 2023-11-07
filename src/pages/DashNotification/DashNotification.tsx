import { Container, Title, Accordion } from '@mantine/core';
import classes from './DashNotification.module.css';
import { Dashboard } from '../Dashboard/Dashboard';
import { IconAlertCircle, IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function DashNotification() {
    return (
        <>
            <Title mb={15} py={15} ta="center" bg={"teal"} className={classes.title}>
                Your last notifications
            </Title>
            <Accordion variant="filled">
                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control icon={<IconAlertTriangle color='red' />}>How can I reset my password?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account">
                    <Accordion.Control icon={<IconInfoCircle color='blue' />}>Can I create more that one account?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                    <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                    <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                    <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
}