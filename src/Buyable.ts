export default interface Buyable {
    title: string,
    format: string,
    originalTitle: string,
    year: number,
    origin: string,
    slogan?: string,
    genre: string[],
    duration: number | string,
};