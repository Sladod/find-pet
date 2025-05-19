import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DefaultStyle } from "react-native-reanimated/lib/typescript/hook/commonTypes";
import {Spacings} from "@/constants/Spacings";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const HEADER_HEIGHT = 400;

type ParallaxScrollViewProps = PropsWithChildren<{
  headerImage: JSX.Element;
  headerBackgroundColor: { dark: string; light: string };
}>;

export const ParallaxScrollView = ({
  children,
  headerImage,
  headerBackgroundColor,
}: ParallaxScrollViewProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const { bottom: bottomEdge } = useSafeAreaInsets()
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    } as DefaultStyle;
  });

  return (
    <ThemedView style={[styles.container, { paddingBottom: bottomEdge }]}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: Spacings.lg,
    gap: 16,
    overflow: 'hidden',
  },
});
