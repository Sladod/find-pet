import {DefaultError, useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/constants/queryKeys";

export type Pet = {
    id: number
    age: number
    sex: 0 | 1
    name: string
    description: string
    imageUrl: string
    datalist: { label: string, value: string }[]
    contact: string
}

export type PetResponse = Pet

export const usePet = () => {
    const { data, isFetching } = useQuery<unknown, DefaultError, PetResponse>({
        queryKey: [queryKeys.pets],
        queryFn: () => fetch('https://dummyjson.com/c/690b-1c9e-4e5e-a3eb').then((res) => res.json()),
    });

    return { data, isFetching }
}
