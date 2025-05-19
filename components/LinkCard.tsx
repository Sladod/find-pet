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

export interface LinkCardProps {
    url: string
    title?: string
}

export const LinkCard = ({ url, title }: LinkCardProps) => {
    const symbolColor = useThemeColor({}, 'primary');
    const backgroundColor = useThemeColor({}, 'background');

    return (
        <Link href={url}>
            <Pressable style={({ pressed }) => [{ backgroundColor, borderColor: backgroundColor }, pressed && { borderColor: symbolColor }, styles.card]}>
                <ThemedText type='default'>{title}</ThemedText>
                <Feather name="arrow-right" size={18} color={symbolColor} />
            </Pressable>
        </Link>
    )
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
