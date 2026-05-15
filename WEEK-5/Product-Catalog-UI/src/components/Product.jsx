function Product(props){

    const { productObj}=props;

    return(
        <div className="shadow-2xl p-3 bg-amber-100">
            <h2 className="text-2xl text-gray-700">{productObj.title}</h2>
            <p className="font-bold p-4">{productObj.price}</p>
            <p className="font-mono p-4">{productObj.description}</p>
        </div>
    )

}

export default Product;