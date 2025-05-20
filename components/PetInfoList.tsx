import {StyleSheet, View, Text} from "react-native";
import {ReactNode} from "react";
import {useThemeColor} from "@/hooks/useThemeColor";
import {Spacings} from "@/constants/Spacings";
import {ThemedText} from "@/components/ThemedText";

type Item = {
    label: string;
    value: string;
};

export type PetInfoListProps = {
    data: Item[]
}

export const PetInfoList = ({ data }: PetInfoListProps) => {
    const labelColor = useThemeColor({}, 'gray')

    return (
        <View style={styles.container}>
            {data.map(({ label, value }, index) => (
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
