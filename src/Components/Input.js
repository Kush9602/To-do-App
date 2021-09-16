 import './css/Input.css';

 function Input(props){
     return (
     <input 
     className={props.className}  
     placeholder={props.placeholder}
     onChange={props.onChange}
     value={props.value}
     />)
 }

 export default Input;