export default interface Buyable {
    id: number,
    title: string,
    format: string,
    originalTitle: string,
    year: number,
    origin: string,
    slogan?: string,
    genre: string[],
    duration: number | string,
    price: number;
};