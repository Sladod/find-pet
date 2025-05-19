import {
    Pressable,
    StyleSheet,
} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColor} from "@/hooks/useThemeColor";
import Feather  from '@expo/vector-icons/Feather';
import {Spacings} from "@/constants/Spacings";
import {Radiuses} from "@/constants/Radiuses";
import {Link} from "expo-router";
import {JSX} from "react";

export interface LinkCardProps {
    url?: string
    title?: string
    onPress?: () => void
}

export const LinkCard = ({ url, title, onPress }: LinkCardProps) => {
    const symbolColor = useThemeColor({}, 'primary');
    const backgroundColor = useThemeColor({}, 'background');

    const main = (
        <Pressable onPress={onPress} style={({ pressed }) => [{ backgroundColor, borderColor: backgroundColor }, pressed && { borderColor: symbolColor }, styles.card]}>
            <ThemedText type='default'>{title}</ThemedText>
            <Feather name="arrow-right" size={18} color={symbolColor} />
        </Pressable>
    ) as JSX.Element

    return url ? <Link href={url}>{main}</Link> : main
}

export const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Radiuses.sm,
        paddingVertical: Spacings.sm,
        paddingHorizontal: Spacings.md,
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
    }
})
