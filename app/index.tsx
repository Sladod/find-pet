import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

import {Card} from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import {LinkCard} from "@/components/LinkCard";
import {Spacings} from "@/constants/Spacings";
import {PetCard} from "@/components/PetCard";
import {JSX} from "react";
import {useThemeColor} from "@/hooks/useThemeColor";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "expo-router";
import {Pet, PetsResponse, usePets} from "@/hooks/usePets";

interface Item {
    id: string;
    name: string;
    age: number
    sex: 0 | 1
}
export default function HomeScreen() {
    const background = useThemeColor({}, 'background')
    const navigation = useNavigation()

    const renderItem = ({ item: { sex, age, name, imageUrl } }: { item: Pet }) => {
        return <PetCard image={imageUrl} age={age} label={name} sex={sex} />;
    };

    const { data } = usePets()

    return (
        <SafeAreaView style={{ backgroundColor: background }}>
            <FlatList
                style={[styles.list, { backgroundColor: background }]}
                renderItem={renderItem as ListRenderItem<Pet>}
                keyExtractor={(item) => String(item.id)}
                ListHeaderComponent={
                    <Card style={styles.supportCard}>
                        <ThemedText type='subtitle'>Как я могу помочь?</ThemedText>
                        <LinkCard onPress={() => navigation.navigate('support')} title='Поддержать' />
                        <LinkCard url='https://example.com' title='Волонтерство' />
                    </Card>
                }
                ItemSeparatorComponent={() => <View style={styles.separator} /> as JSX.Element}
                data={data?.list as Pet[] ?? []}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        gap: Spacings.md,
        paddingHorizontal: Spacings.md,
    },
    supportCard: {
        gap: Spacings.sm,
        marginBottom: Spacings.md,
        marginTop: Spacings.lg
    },
    separator: {
        height: Spacings.md
    }
});
