//creating our second component

const Hello =(props) =>{

    //javascript code
//console.log(props);
    return(
      <h1 style={{ color:'red',fontFamily:'monospace'}}>Hello {props.name}</h1>
    )
  }
  
  export default Hello;