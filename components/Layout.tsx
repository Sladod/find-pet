import {Dimensions, StyleProp, StyleSheet, View, ViewProps} from "react-native";
import {Spacings} from "@/constants/Spacings";
import {useThemeColor} from "@/hooks/useThemeColor";
import {PropsWithChildren} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export type LayoutProps = PropsWithChildren<{
    lightColor?: string
    darkColor?: string
}>

export const Layout = ({ children, lightColor, darkColor }: LayoutProps) => {
    const { top, bottom } = useSafeAreaInsets()
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <View style={[{ backgroundColor, paddingTop: top + Spacings.md, paddingBottom: bottom + Spacings.md }, styles.layout] as StyleProp<ViewProps>}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        paddingHorizontal: Spacings.md,
        minHeight: Dimensions.get('screen').height
    }
})
