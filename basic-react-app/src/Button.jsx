function handleCkick(event){
    console.log("HEllo World");
    console.log(event);
}

function handleMouseOver(){
    console.log("bye");
}

function handleDoubleClick(){
    console.log("you double clicked");
}



export default function Button(){
    return (
        <div>
            <button onClick={handleCkick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>This para is for Demo</p>
            <button onDoubleClick={handleDoubleClick}>click here also</button>
        </div>
    )
}