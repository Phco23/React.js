import ItemListPage from './itemlist';

const ItemList = () => {
    const items = [
        {
            id: 1,
            image: 'https://picsum.photos/200/300',
            name:   'Item 1',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 2,
            image: 'https://picsum.photos/200/300',
            name: 'Item 2',
            price: 34.99,
            rating: 3.8,
        },
        {
            id: 3,
            image: 'https://picsum.photos/200/300',
            name: 'Item 3',
            price: 34.67,
            rating: 4.7,
        },
        {
            id: 4,
            image: 'https://picsum.photos/200/300',
            name: 'Item 4',
            price: 49.89,
            rating: 4.8,
        },
    ];

    return(
        <div className="container-fluid">
            <div div className="container p-5">
                <div className="row">
                    {items.map((items_p, print_here) => (
                        <div input={print_here} className="col-lg-3 col-md-12 mb-4">
                            <ItemListPage {...items_p} />
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}

export default ItemList;