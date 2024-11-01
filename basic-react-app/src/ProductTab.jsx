import Product from "./product.jsx";



function ProductTab(){
    let styles = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap",
        backgroundColor : "#f0f0f0",
         padding : "10px"
        

    }
    return(
        <div style={styles}>
        <Product title ="Logitech Mx Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronnics Zeb-Transformer" idx={2}/>
        <Product title="Petronics Pot-23" idx={3}/>
        </div>
    )
}

export default ProductTab;