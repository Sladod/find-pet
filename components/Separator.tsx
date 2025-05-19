import {StyleSheet, View} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

export const Separator = () => {
    const color = useThemeColor({}, 'primary')

    return (
        <View style={[styles.separator, { backgroundColor: color }]} role='separator' />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
    }
})
