import {DefaultError, useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/constants/queryKeys";

export type Pet = {
    id: number
    age: number
    sex: 0 | 1
    name: string
    description: string
    imageUrl: string
    datalist: { type: string, value: string }[]
}

export interface PetsResponse {
    list: Pet[]
}

export const usePets = () => {
    const { data, isFetching } = useQuery<unknown, DefaultError, PetsResponse>({
        queryKey: [queryKeys.pets],
        queryFn: () => fetch('https://dummyjson.com/c/144b-fa6b-4802-8f77').then((res) => res.json()),
    });

    return { data, isFetching }
}
