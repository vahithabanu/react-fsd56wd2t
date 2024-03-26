//creating our second component

const Hello =(props) =>{

    //javascript code
//console.log(props);
const headerStyle={
     color:'red',
     fontFamily:'monospace'
}
    return(
      <h1 style={headerStyle}>Hello {props.name}</h1>
    )
  }
  
  export default Hello;