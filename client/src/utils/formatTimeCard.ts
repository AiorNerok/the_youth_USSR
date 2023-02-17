
export const FormatterDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("ru", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
    let result = formatter.format(date).replace(/,|.,/g, '.')
    return result
}