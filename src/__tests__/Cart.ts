import Cart from "../Cart";

describe('Cart', () => {
    let cart = new Cart();

    beforeEach(() => {
       cart = new Cart();
    })

    test('should show purchases in cart', () => {
        const result = [{
            title: 'Апгрейд',
            format: '3D',
            originalTitle: 'Upgrade',
            year: 2018,
            origin: 'Австралия, США',
            slogan: 'none',
            genre: [ 'фантастика', 'боевик', 'триллер', 'детектив', 'преступление' ],
            duration: '100мин'
        }];
        cart.add({
            title: 'Апгрейд',
            format: '3D',
            originalTitle: 'Upgrade',
            year: 2018,
            origin: 'Австралия, США',
            slogan: 'none',
            genre: ['фантастика', 'боевик', 'триллер', 'детектив', 'преступление'],
            duration: '100мин',
        });

        expect(cart.getAll()).toEqual(result)
    })
})
