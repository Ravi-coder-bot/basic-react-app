function handleOnSubmit(event){
    // handle form submission
    event.preventDefault();
    console.log('Form submitted');
}


 const Form = () => {
  return (
   <form >
    <input placeholder="write something" type="text" />
    <button onClick={handleOnSubmit}>Submit</button>
    

   </form>
  )
}

export default Form;