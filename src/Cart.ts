import Movie from "./Movie";
export default class Cart {
    private _items: Movie[] = [];

    add(item: Movie): void {
        this._items.push(item);
    }

    getAll(): Movie[] {
        return [...this._items]
    }
}