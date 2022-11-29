import React,{useState} from 'react';
const Weather=()=> {
  const[city,setCity]=useState("");
  const[result,setResult]=useState("")
  
  const changeHanler=e=>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=>response.json()

    ).then(data=>{
      const kelvin=data.main.temp;
      const celcius =kelvin-273.5
      setResult("temp at "+city+"\n "+Math.round(celcius)+"°c");
      setCity("");
    })
    }
  
  return (
    <div>
      <center>
      <form onSubmit={submitHandler}>

        <input type="text" name="city" value={city} onChange={changeHanler} /><br/><br/>
          <input type="submit" value="temperature"/>
      </form><h1>{result}</h1>
      <h1>GSR LIVES ON</h1>
</center>
    </div>
  )
}
export default Weather