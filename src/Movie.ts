import Buyable from "./Buyable";
export default class Movie implements Buyable {
    readonly title: string;
    readonly format: string;
    readonly originalTitle: string;
    readonly year: number;
    readonly origin: string;
    readonly slogan: string;
    readonly genre: string[];
    readonly duration: number | string;

    constructor(title: string, format: string, originalTitle: string, year: number, origin: string, slogan: string, genre: string[], duration: number | string) {
        this.title = title;
        this.format = format;
        this.originalTitle = originalTitle;
        this.year = year;
        this.origin = origin;
        this.slogan = slogan;
        this.genre = genre;
        this.duration = duration;
    }
}