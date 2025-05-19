import React, {ReactElement} from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

type IconButtonProps = {
    onPress: () => void;
    size?: number;
    iconSize?: number;
    iconColor?: string;
    backgroundColor?: string;
    children?: ReactElement
};

export const IconButton = ({
    onPress,
    size = 48,
    backgroundColor = '#fff',
    children,
}: IconButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor,
                    opacity: pressed ? 0.75 : 1,
                },
            ]}
        >
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
