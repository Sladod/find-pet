import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

import {Card} from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import {LinkCard} from "@/components/LinkCard";
import {Spacings} from "@/constants/Spacings";
import {PetCard} from "@/components/PetCard";
import {JSX, ReactElement} from "react";

interface Item {
    id: string;
    name: string;
    age: number
    sex: 0 | 1
}

export default function HomeScreen() {
    const renderItem = ({ item: { sex, age, name } }: { item: Item }) => {
        return <PetCard age={age} label={name} sex={sex} />;
    };

    return (
        <FlatList
            style={[styles.list]}
            renderItem={renderItem as ListRenderItem<Item>}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
                <Card style={styles.supportCard}>
                    <ThemedText type='subtitle'>Как я могу помочь?</ThemedText>
                    <LinkCard url='support' title='Поддержать' />
                    <LinkCard url='https://example.com' title='Волонтерство' />
                </Card> as ReactElement
            }
            ItemSeparatorComponent={() => <View style={styles.separator} /> as JSX.Element}
            data={[
                { name: 'Рокки', age: 2, sex: 0, id: 0, },
                { name: 'Оливер', age: 5, sex: 1, id: 1, },
                { name: 'Оливер', age: 5, sex: 1, id: 2, },
                { name: 'Оливер', age: 5, sex: 1, id: 3, },
            ] as Item[]}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        gap: Spacings.md,
        padding: Spacings.md,
    },
    supportCard: {
        gap: Spacings.sm,
        marginBottom: Spacings.md,
    },
    separator: {
        height: Spacings.md
    }
});
