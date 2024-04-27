import Cart from "../Cart";

describe('Cart', () => {
    let cart = new Cart();

    beforeEach(() => {
       cart = new Cart();
    })

    test('should show purchases in cart', () => {
        const result = [{
            id: 1,
            title: 'Апгрейд',
            format: '3D',
            originalTitle: 'Upgrade',
            year: 2018,
            origin: 'Австралия, США',
            genre: [ 'фантастика', 'боевик', 'триллер', 'детектив', 'преступление' ],
            duration: '100мин',
            price: 100
        }];
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
        expect(cart.getAll()).toEqual(result)
    })
})
