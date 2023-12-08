import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import classes from './NotFound.module.css';
import { HomeLayout } from '../Layouts/HomeLayout';
import image from './404-error38.jpg'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const { t } = useTranslation("notFound")
    const navigate = useNavigate()
    return (
        <HomeLayout>
            <Container className={classes.root}>
                <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
                    <Image src={image} className={classes.mobileImage} />
                    <div>
                        <Title className={classes.title}>{t("heading")}</Title>
                        <Text c="dimmed" size="lg">{t("paragraph")}</Text>
                        <Button
                            onClick={() => navigate("/")}
                            variant="outline"
                            size="md" mt="xl" className={classes.control}>
                            {t("backBtn")}
                        </Button>
                    </div>
                    <Image src={image} className={classes.desktopImage} style={{ mixBlendMode: "multiply"}} />
                </SimpleGrid>
            </Container>
        </HomeLayout>
    );
}