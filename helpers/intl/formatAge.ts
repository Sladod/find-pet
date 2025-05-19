export const formatAge = (age: number) => {
    const pluralRules = new Intl.PluralRules('ru', { type: 'cardinal' });
    const formatter = new Intl.NumberFormat('ru-RU');

    const suffixMap = {
        one: 'год',
        few: 'года',
        many: 'лет',
        other: 'лет',
    };

    const suffix = suffixMap[pluralRules.select(age)];
    return `${formatter.format(age)} ${suffix}`;
}
