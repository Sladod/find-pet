import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewProps} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import {Radiuses} from "@/constants/Radiuses";
import {Spacings} from "@/constants/Spacings";

export type CardProps = PropsWithChildren<{
    lightColor?: string;
    darkColor?: string;
}> & ViewProps

export const Card = ({ children, lightColor, darkColor, style, ...props }: CardProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'surface');

    return (
        <View style={[{ backgroundColor }, styles.card, style]} {...props}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: Spacings.md,
        borderRadius: Radiuses.md,
    }
})
