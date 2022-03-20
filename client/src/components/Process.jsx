import React,{useState,useEffect} from "react";
import Axios from "axios";
function Process() {

const [id,setId]=useState("")
const [firstName,setfirstName]=useState("")
const [lastName,setlastName]=useState("")
const [email,setemail]=useState("")
const [birthDate,setbirthDate]=useState("")
const [added,setadded]=useState("")
const [data,setdata]=useState([])

//get
// useEffect(()=>{
//   Axios.get("http://localhost:3001/api/get").then((response)=>{
// setdata(response.data)
//   });
// });
useEffect(()=>{
  Axios.get("http://localhost:3001/api/get").then((response)=>{
setdata(response.data)
console.log(response)
  });
});

const deleteAuthor=(id)=>
{
    // Axios.delete("http://localhost:3001/api/delete/${id}")
}
const submitAuthor=()=>
{Axios.post("http://localhost:3001/api/insert",{

id:id,
firstName:firstName,
lastName:lastName,
email:email,
birthDate:birthDate,
added:added

}).then(()=>{

  
  alert("successful insert")});
};

    return ( 
    <div className = "process" >

  <h1>{data.MessageText}</h1>
<form  class="col-sm mt-0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
  <div class="mb-3">
    {/* <label for="exampleInputEmail1" class="form-label">ID</label> */}
    <input type="number" class="form-control" id="exampleInputEmail1" name="id" onChange={(e)=>
   {setId(e.target.value);} } placeholder="ID"/>
  </div>
  <div class="mb-3">
    {/* <label  class="form-label">First Name</label> */}
    <input type="text" class="form-control"  name="firstName" onChange={(e)=>
   {setfirstName(e.target.value);} } placeholder="First Name"/>
  </div>
  <div class="mb-3">
    {/* <label  class="form-label">Last Name</label> */}
    <input type="text" class="form-control"  name="lastName" onChange={(e)=>
   {setlastName(e.target.value);} } placeholder="Last Name"/>
  </div>
  <div class="mb-3">
    {/* <label for="exampleInputPassword1" class="form-label">Email</label> */}
    <input type="email" class="form-control"  name="email"onChange={(e)=>
   {setemail(e.target.value);} }placeholder="Email"/>
  </div>
  <div class="mb-3">
    {/* <label  class="form-label">BirthDate</label> */}
    <input type="date" class="form-control"  name="birthDate"onChange={(e)=>
   {setbirthDate(e.target.value);} }placeholder="ok"/>
  </div>
  <div class="mb-3">
    {/* <label  class="form-label">Added at</label> */}
    <input type="date" class="form-control"  name="added"onChange={(e)=>
   {setadded(e.target.value);} }placeholder="Added at"/>
  </div>
  { data.map((val)=>{
    return (
        <div>
  <button type="submit" class="btn btn-primary" onClick={submitAuthor}>Submit</button>
  <button type="submit" class="btn btn-danger" onClick={()=>{deleteAuthor(val.id)}}>Delete</button>
  </div> 
    )})}
  
</form>
        
</div>
        
    );
}

export default Process;