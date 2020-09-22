import React from "react";
import ReactDOM from "react-dom";

class Ex extends React.Component{
  constructor(props){
    super(props);
    this.state={name:''};

    }
update=(e)=>{
  this.setState({name:e.target.value})
} 
  render(){
    return <div>

<h1><input value={this.state.name} onChange={this.update}/></h1>
<input value={this.state.name} onChange={this.update}/>
   </div>
  }
}

ReactDOM.render(<Ex  />, document.getElementById("root"));
