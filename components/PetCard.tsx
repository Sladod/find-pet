import {Linking, StyleSheet, View} from "react-native";
import {Spacings} from "@/constants/Spacings";
import {Radiuses} from "@/constants/Radiuses";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemedText} from "@/components/ThemedText";
import {formatAge} from "@/helpers/intl";
import {Button} from "@/components/Button";
import {Image} from "expo-image";
import {useRouter} from "expo-router";

export interface PetCardProps {
    image?: string
    label?: string
    sex?: 0 | 1
    age?: number
}

export const PetCard = ({ sex, age, label, image }: PetCardProps) => {
    const background = useThemeColor({}, 'background')
    const router = useRouter();

    const description = [
        age !== undefined ? formatAge(age) : undefined,
        sex !== undefined ? sex === 0 ? 'мальчик' : 'девочка' : undefined,
    ].filter(Boolean).join(', ')

    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.coverImage} />
            <View style={[{ backgroundColor: background }, styles.details]}>
                <View>
                    <ThemedText type='defaultSemiBold'>{label}</ThemedText>
                    <ThemedText>{description}</ThemedText>
                </View>
                <Button onPress={() => router.replace('explore')} size='sm' title='Забрать себе' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 240,
        width: '100%',
        padding: Spacings.sm,
        borderRadius: Radiuses.md,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    coverImage: {
        right: 0,
        top: 0,
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderRadius: Radiuses.md,
        objectFit: 'cover',
    },
    details: {
        borderRadius: Radiuses.md,
        padding: Spacings.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: Spacings.sm,
        flexWrap: 'wrap'
    }
})
