import { useState } from "react"


 const LikeButton = () => {
    let [isLike,setIsLike] =  useState(false);
    let toggleLike  = () => {
        setIsLike(!isLike);
    }
    let likestyle = {
        color : "red"
    }

   
  return (
    <div>
       
        <p onClick={toggleLike}>
            {
                isLike  ? <i className="fa-solid fa-heart" style={likestyle}></i> :<i className="fa-regular fa-heart"></i>
            }
            </p>
            
            
    </div>
    
  )
}

export default LikeButton;
