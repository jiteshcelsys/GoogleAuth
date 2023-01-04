const Response = ({props,img}) =>{
  console.log(props);
  
  return(
    <>
   <img src={img} alt='pic' width='13px' height ='13px' />
    <span>{props}</span> 
    </>
  )
}
export default Response ;
