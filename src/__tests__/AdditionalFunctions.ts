import Cart from "../Cart";

describe('Cart', () => {
    let cart = new Cart();

    beforeEach(() => {
       cart = new Cart();
    })

    test('should show amount of products in cart', () => {
        const result = 175;
        cart.add({
            id: 1,
            title: 'Апгрейд',
            format: '3D',
            originalTitle: 'Upgrade',
            year: 2018,
            origin: 'Австралия, США',
            genre: ['фантастика', 'боевик', 'триллер', 'детектив', 'преступление'],
            duration: '100мин',
            price: 100
        });
        cart.add({
            id: 2,
            title: 'Криминальное чтиво',
            format: '2D',
            originalTitle: 'Pulp Fiction',
            year: 1994,
            origin: 'США',
            genre: ['преступление', 'драма'],
            duration: '154мин',
            price: 75
        });

        expect(cart.getSum()).toBe(result)
    });
    test('should return amount with discount', () => {
        const result = 131.25;
        cart.add({
            id: 1,
            title: 'Апгрейд',
            format: '3D',
            originalTitle: 'Upgrade',
            year: 2018,
            origin: 'Австралия, США',
            genre: ['фантастика', 'боевик', 'триллер', 'детектив', 'преступление'],
            duration: '100мин',
            price: 100
        });
        cart.add({
            id: 2,
            title: 'Криминальное чтиво',
            format: '2D',
            originalTitle: 'Pulp Fiction',
            year: 1994,
            origin: 'США',
            genre: ['преступление', 'драма'],
            duration: '154мин',
            price: 75
        });

        expect(cart.getSumWithDiscount(25)).toBeCloseTo(result)
    });

    test('should return array length after removing elements', () => {
        const result = 2;
        cart.add({
            id: 1,
            title: 'Апгрейд',
            format: '3D',
            originalTitle: 'Upgrade',
            year: 2018,
            origin: 'Австралия, США',
            genre: ['фантастика', 'боевик', 'триллер', 'детектив', 'преступление'],
            duration: '100мин',
            price: 100
        });
        cart.add({
            id: 2,
            title: 'Криминальное чтиво',
            format: '2D',
            originalTitle: 'Pulp Fiction',
            year: 1994,
            origin: 'США',
            genre: ['преступление', 'драма'],
            duration: '154мин',
            price: 75
        });

        expect(cart.deleteProduct(2)).toBe(result)
    });
})
