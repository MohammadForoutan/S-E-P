import { useState, useRef } from 'react';
import { Autocomplete, Button, Container, Flex, Group, Input, Loader, MultiSelect, Paper, Select, Stack, TextInput, Textarea } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function DashSupport() {
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);
    const { t } = useTranslation("dashSupport")
    return (

        <div>
            <Paper withBorder p={"20px"}>
                <TextInput
                    value={value}
                    rightSection={loading ? <Loader size="1rem" /> : null}
                    label={t("title")}
                    placeholder={t("titlePlace")}
                />

                <Group mt={"8px"} grow>
                    <Select
                        label={t("section")}
                        defaultValue={"technical"}
                        data={[
                            { label: "فنی", value: "technical" },
                            { label: "مالی", value: "financial" }
                        ]}
                        allowDeselect={false}
                    />
                    <Select
                        label={t("level")}
                        defaultValue={"normal"}
                        data={[
                            { label: "عادی", value: "normal" },
                            { label: "متوسط", value: "medium" },
                            { label: "زیاد", value: "high" },
                            { label: "ضروری", value: "emergency" },
                        ]}
                        allowDeselect={false}
                    />
                </Group>

                <Textarea
                    mt={"8px"}
                    label="پیام مربوطه"
                    description="ابتدا  کار خود را توضیح دهید و مرحله‌ای که دچار مشکل شده‌اید را با جزئیات بیشتر شرح دهید."
                    placeholder='پیام شما...'
                    autosize
                    minRows={6}
                    maxRows={14}
                />
                <Button mt={"18px"} display={"block"} w={"100%"}>ثبت تیکت</Button>
            </Paper>

        </div>

    );
}