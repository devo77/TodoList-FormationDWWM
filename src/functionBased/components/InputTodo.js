import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {
 // const [title, setTitle] = useState("") // key title et sa fonction, initié avec une valeur vide
   const [inputText, setInputText] = useState({
    title:"",
    //fName: "",
   // lastName: "",
  }) 

  const onChange = e => {
   // setTitle(e.target.value)
     setInputText(prevState=>{
      return {
        ...prevState, 
        [e.target.name]: e.target.value,
      }
    }) 
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title:"",
        //fName: "",
        // lastName: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      {/* <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add last name"
          value={inputText.lastName}
          name="lastName"
          onChange={onChange}
        /> */}
      <button className="input-submit"><FaPlusCircle /></button>
    </form>
  )
}



// class InputTodo extends Component {
//   state = {
//     title: "",
//   }
//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,    
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({    
//       title: ""  
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add todo..."
//           value={this.state.title}
//           name="title"          
//           onChange={this.onChange}
//         />
//         <input type="submit" className="input-submit" value="Submit" />
//       </form>
//     )
//   }
// }
export default InputTodo