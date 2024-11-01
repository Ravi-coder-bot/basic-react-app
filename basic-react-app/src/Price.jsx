function Price({oldPrice,newPrice}){
    let oldStyle = {
        textDecorationLine : 'line-through',
        color : 'gray',
    }

    let newStyle = {
        color : 'green',
        fontWeight : "bold"
    }

    let styles = {
        backgroundColor : "blue",
        height :  "30px",
        borderBottomLeftRadius :  "10px",
        borderBottomRightRadius :  "10px",


    }
    return(
        <div style={styles}>
            <span style={oldStyle}>Old Price : {oldPrice} </span>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <span style={newStyle}>New Price  : {newPrice}</span>

        </div>
    )
}

export default Price;