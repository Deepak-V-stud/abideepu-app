import React, { Component } from "react";

class Form extends Component {
    constructor (props) {
      super(props);
      this.state = {
        name:'',
        formErrors: {name:''},
        namevalid: false,
        formValid: false
      }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
  
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters and space";
           }        
        }
        this.setState({errors: errors});
        return formIsValid;
    }
     
    contactSubmit(e){
         e.preventDefault();

         if(this.handleValidation()){
            alert("Form submitted");
         }else{
            alert("Form has errors.")
         }
   
     }
 
     handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
     }
 
     render(){
         return (
             <div>           
                <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                     <div className="col-md-6">
                       <fieldset>
                            <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                           <br/>
                      </fieldset>
                   </div>
       
               </form>
             </div>
       )
     }
 }
 export default Form;