import {StyleSheet, View, Text} from "react-native";
import {ReactNode} from "react";
import {useThemeColor} from "@/hooks/useThemeColor";
import {Spacings} from "@/constants/Spacings";
import {ThemedText} from "@/components/ThemedText";

type Item = {
    label: string;
    value: string;
};

const items: Item[] = [
    { label: 'Возраст', value: '16' },
    { label: 'Порода', value: 'Неизвестно' },
    { label: 'Вес', value: '3.5 кг' },
    { label: 'Любимая игрушка', value: 'Мячик' },
    { label: 'Пол', value: 'Женский' },
];

export const PetInfoList = () => {
    const labelColor = useThemeColor({}, 'gray')

    return (
        <View style={styles.container}>
            {items.map(({ label, value }, index) => (
                <View key={index} style={styles.item}>
                    <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
                    <ThemedText type='default'>{value}</ThemedText>
                </View>
            )) as ReactNode}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacings.md,
    },
    item: {
        width: '45%',
    },
    label: {
        fontSize: 14,
        marginBottom: 2,
    },
});
