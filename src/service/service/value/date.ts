export const isToday = (
    date: Date
): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

export const isYesterday = (
    date: Date
): boolean => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date.toDateString() === yesterday.toDateString();
}