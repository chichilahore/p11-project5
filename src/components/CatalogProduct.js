function CatalogProduct({imageProduct, price, titleProducts, description}) {
    return (
        <div>
            <img src={imageProduct} alt="Producto" />
            <div className="Price"><p>{price}</p></div>
            <h3>{titleProducts}</h3>
            {/* <div>
                {descriptions.map((description) => (
                    // <p>{description}</p>
                ))} 
            </div> */}
            <p>{description}</p>
        </div>
    )
}

export default CatalogProduct;