import {useState} from 'react';
import './App.css';


function Member() {
  return (
    <h1>Member area</h1>
  );
}

function Public({ setAuthorized }) {
  
  return (
    <>
    <h1>Public area</h1>
      <button onClick={()=>setAuthorized(true)}>Login</button>
    </>
  )
}


export default function App() {
  

  let [authorized, setAuthorized] = useState(false);
  return (
      <>
      {authorized ? <Member /> : <Public setAuthorized={ setAuthorized}/>}
      </>
    );

  // if (authorized) {
  //   return (
  //     <Member />
  //   )
      
  // } else {
  //   return (
  //     <Public />
  //   )
  // };

} 
