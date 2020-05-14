import React,{Component} from 'react';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
fetch('http://127.0.0.1:3001/api/publishers').then(res=> res.json())
.then(json=> {
this.setState({
  isLoaded: true, 
  items: json,
})
});


  render() { 

    var  { isLoaded, items } = this.state; 
if (!isLoaded) {
  return "Loading"; 
}
else {

return (
<div className="App">

</div>
    );
  }
}
}

export default App;
