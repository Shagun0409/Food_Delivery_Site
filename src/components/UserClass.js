import React from "react";
  

class UserClass extends React.Component{
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        // avatar_url:"htp://dummy"
      }
    };
  }


 async componentDidMount() {
    
   //Api calls

   const data = await fetch("https://api.github.com/users/Shagun0409");
   const json =await data.json();
   console.log(json);
   this.setState({
     userInfo: json
   });
  }


  componentDidUpdate(){
  
  }

  componentWillUnmount() {
  
}

  render() {
    const { name,location ,avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h1>Name:{name}</h1>
        <h2> Name : { name }</h2>
        <h2> Location :{location}</h2>
        <h2>Contact: @shagun</h2>
      </div>
    )
  }
}

export default UserClass;