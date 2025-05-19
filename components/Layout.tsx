import {Dimensions, StyleProp, StyleSheet, View, ViewProps} from "react-native";
import {Spacings} from "@/constants/Spacings";
import {useThemeColor} from "@/hooks/useThemeColor";
import {PropsWithChildren} from "react";

export type LayoutProps = PropsWithChildren<{
    lightColor?: string
    darkColor?: string
}>

export const Layout = ({ children, lightColor, darkColor }: LayoutProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <View style={[{ backgroundColor }, styles.layout] as StyleProp<ViewProps>}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        padding: Spacings.md,
        minHeight: Dimensions.get('screen').height
    }
})
