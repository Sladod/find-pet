export const formatAge = (age: number) => {
    const mod10 = age % 10;
    const mod100 = age % 100;

    let suffix = 'лет';

    if (mod100 >= 11 && mod100 <= 14) {
        suffix = 'лет';
    } else if (mod10 === 1) {
        suffix = 'год';
    } else if (mod10 >= 2 && mod10 <= 4) {
        suffix = 'года';
    }

    return `${age} ${suffix}`;
}
