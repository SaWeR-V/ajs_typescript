import Movie from "./Movie";
export default class Cart {
    private _items: Movie[] = [];

    add(item: Movie): void {
        this._items.push(item);
    }

    getAll(): Movie[] {
        return [...this._items]
    }

    getSum() {
        let sum = 0;
        for (const item of this._items) {
            sum += item.price
        }
        return sum;
    }

    getSumWithDiscount(percentage: number) {
        let sum = 0;
        for (const item of this._items) {
            sum += item.price
        }
        return sum - ((sum / 100) * percentage);
    }

    deleteProduct(id: number) {
        for (const item of this._items) {
            id = item.id;
            this._items.splice(id, 1)
        }
        return this._items.length;
    }
}