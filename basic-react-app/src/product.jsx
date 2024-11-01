import "./product.css";
import Price from "./price.jsx";

function Product({title,idx}) {
   let oldPrice = ["12,955","40,000","700","5899"];
   let newPrice = ["8,955","30000","400","3500"];
   let  discount  = [
    ["20%","5 programmable buttons "],
    ["25%", "300 Dpi"],
    ["40%" , "ultrasonic wave "], 
    ["50%"," 2.4Ghz wireless"]
];

   let styles = {
    margin :  "5px",
    backgroundColor : "red",
    color : "white",
    border : "1px solid black",
    
   }


    return (
        <div className="Product" style={styles}>
        <h4>{title}</h4>
        <p>{discount[idx][0]}</p>
        <p>{discount[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}
export default Product;