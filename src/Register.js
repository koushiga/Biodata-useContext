import React, { useContext,useState } from "react";
import { BioContext } from "./Context";

function Register(){

    const {setName,setId,setDob,setAge,setGender,setFname,setMname,setShowDetail}=useContext(BioContext);

    return(
        <div className="Card">
            <h1>Student Details</h1>
            <form>
                <table>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input type="text" onChange={(e)=>setName(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Id:</label></td>
                        <td><input type="number" onChange={(e)=>setId(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Dob:</label></td>
                        <td><input type="date" onChange={(e)=>setDob(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Age:</label></td>
                        <td><input type="number" onChange={(e)=>setAge(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Gender:</label></td>
                        <td><input type="text" onChange={(e)=>setGender(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Father Name:</label></td>
                        <td><input type="text" onChange={(e)=>setFname(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Mother Name:</label></td>
                        <td><input type="text" onChange={(e)=>setMname(e.target.value)}/></td>
                    </tr>
                </table>
                <button onClick={()=>setShowDetail(true)}>Submit</button>
            </form>
        </div>
    )
}

export default Register;