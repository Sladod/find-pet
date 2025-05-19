import {
    Pressable,
    PressableProps,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import {useThemeColor} from "@/hooks/useThemeColor";
import {Spacings} from "@/constants/Spacings";
import {Radiuses} from "@/constants/Radiuses";

export interface ButtonProps extends Pick<PressableProps, 'onPress'> {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary'
    title?: string
    style?: ViewStyle
}

export const Button = ({ size = 'md', variant = 'primary', onPress, style, title }: ButtonProps) => {
    const textColor = useThemeColor({}, 'primary')
    const backgroundColor = useThemeColor({}, 'primarySurface')
    const pressedBackgroundColor = useThemeColor({}, 'primaryAccent')

    const textSecondaryColor = useThemeColor({}, 'textReverse')
    const backgroundSecondaryColor = useThemeColor({}, 'secondary')
    const pressedSecondaryBackgroundColor = useThemeColor({}, 'secondaryAccent')

    const height = size === 'sm' ? 38 : size === 'md' ? 48 : 58;
    const bgColor = variant === 'primary' ? backgroundColor : backgroundSecondaryColor
    const tColor = variant === 'primary' ? textColor : textSecondaryColor
    const pressedBgColor = variant === 'primary' ? pressedBackgroundColor : pressedSecondaryBackgroundColor

    return (
        <Pressable
            role='button'
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: bgColor, height },
                pressed && { backgroundColor: pressedBgColor },
                style,
            ]}
            onPress={onPress}
        >
            <ThemedText type='defaultMedium' lightColor={tColor} darkColor={tColor}>
                {title}
            </ThemedText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacings.md,
        borderRadius: Radiuses.sm,
    }
})
