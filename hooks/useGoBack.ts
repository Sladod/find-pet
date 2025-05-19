import {useNavigation, useRouter} from "expo-router";

export const useGoBack = () => {
    const navigation = useNavigation()
    const router = useRouter()

    return () => {
        if (navigation.canGoBack()) navigation.goBack();
        else router.replace('/');
    }
}
