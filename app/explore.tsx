import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IconButton } from "@/components/IconButton";
import { Feather} from "@expo/vector-icons";
import React from "react";
import {useGoBack} from "@/hooks/useGoBack";
import {Separator} from "@/components/Separator";
import {PetInfoList} from "@/components/PetInfoList";
import {Button} from "@/components/Button";

export default function Explore() {
    const textReverseColor = useThemeColor({}, 'textReverse')
    const goBack = useGoBack()

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <View style={styles.header}>
                    <Image source={require('@/assets/images/img_1.png')} style={styles.headerImage} />
                    <View style={styles.headerMain}>
                        <IconButton onPress={goBack}>
                            <Feather name="arrow-left" size={24} color='#000' />
                        </IconButton>
                    </View>
                    <ThemedText type='title' lightColor={textReverseColor} darkColor={textReverseColor}>Оливер</ThemedText>
                </View>
            }
        >
            <ThemedText>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</ThemedText>
            <Separator />
            <PetInfoList />
            <Button variant='secondary' title='Забрать' />
            <Button title='Поддержать' />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        left: 0,
        top: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    headerMain: {
        flex: 1,
        alignItems: 'flex-start',
        width: '100%',
    },
    header: {
        width: '100%',
        height: 400,
        justifyContent: 'flex-end',
        padding: 28,
        alignItems: 'center',
    },
});
