import React, {Component} from 'react';


class Form extends Component {
  constructor(props){
    super(props)
      this.state = { 
        name: '',
        favMovie: '' };
 }

 handleChange = (e) => {
   
    //this.setState({ [e.target.name]: e.target.value });
    this.props.updateGreeting(this.refs.name.value)
    this.props.updateMovie(this.refs.favMovie.value)
 };

 render() {
   return (
     <React.Fragment>
       
         <label htmlFor="name">name</label>
         <input
           type="name"
           name="name"
           ref='name'
           //value={this.state.name}
           //onChange={this.handleChange}
         />

         <label htmlFor="favMovie">favMovie</label>
         <input
           type="favMovie"
           name="favMovie"
           ref='favMovie'
           //value={this.state.favMovie}
           //onChange={this.handleChange}
         />
         <button onClick={this.handleChange}>Go!</button>
       
     </React.Fragment>
   );
 }
}
//     this.state = {
//       name: this.props.name,
//       favMovie: this.props.favMovie,
//     }
//   }

// handleChange = (e) => {
//   this.props.updateGreeting(e.target.value)
  
// }
// handleChange2=(e)=>{
//   this.props.updateMovie(e.target.value)
// }
// handleSubmit = () =>{
//   this.handleChange(this.props.name)
//   this.handleChange2(this.props.favMovie)
// }

//   render() {
//     return (

//       <div>
//         <form>
//           <label>
//             Name:
//             <input type="name" name="name" onChange={this.handleChange} value={this.props.name}/>
//             Movie:
//             <input type="movie" name="movie" onChange={this.handleChange2} value={this.props.favMovie} />
//           </label>
//             <button onClick={this.handleSubmit}> Reset</button>
//         </form>
//       </div>
//       );  
//   }
// }

export default Form;
