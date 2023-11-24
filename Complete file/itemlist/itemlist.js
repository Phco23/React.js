const ItemListPage = ({image, name, price, rating}) => {
    return(
        <div className="card h-100 shadow-lg">
            <div className="card-body">
                <div className="text-center p-3">
                    <img src={image} />
                     <h3>{name}</h3>
                     <p>Price: ${price}</p>
                     <p>Rating: {rating}</p>
                 </div>
            </div>
        </div>
    )
}

export default ItemListPage;