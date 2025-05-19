import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useNavigation } from "expo-router";
import { IconButton } from "@/components/IconButton";
import { Feather} from "@expo/vector-icons";
import React from "react";
import {useGoBack} from "@/hooks/useGoBack";
import {Separator} from "@/components/Separator";
import {PetInfoList} from "@/components/PetInfoList";
import {Button} from "@/components/Button";
import {Layout} from "@/components/Layout";
import {Spacings} from "@/constants/Spacings";

export default function Support() {
    const goBack = useGoBack()

    return (
        <Layout>
            <IconButton onPress={goBack}>
                <Feather name="arrow-left" size={24} color='#000' />
            </IconButton>
            <View style={styles.main}>
                <ThemedText type='title'>Как я могу помочь?</ThemedText>
                <ThemedText>
                    Забота — это просто. Даже если вы не можете забрать питомца домой, вы всё равно можете сделать для него что-то важное.
                </ThemedText>
                <View style={styles.faq}>
                    <Collapsible title='Что входит в финансовую поддержку?'>
                        <ThemedText>
                            Финансовая помощь идёт на еду, ветеринарные расходы, прививки, содержание и размещение информации о питомце.
                        </ThemedText>
                    </Collapsible>
                    <Collapsible title='Можно ли помочь конкретному животному?'>
                        <ThemedText>
                            Да, вы можете выбрать конкретного питомца и нажать на кнопку "Поддержать"
                        </ThemedText>
                    </Collapsible>
                    <Collapsible title='Как стать волонтёром?'>
                        <ThemedText>
                            Свяжитесь с нами через социальные сети или приходите в приют в удобное время. Мы всё покажем и научим.
                        </ThemedText>
                    </Collapsible>
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: Spacings.lg,
        gap: Spacings.md,
    },
    faq: {
      gap: Spacings.sm,
    }
});
