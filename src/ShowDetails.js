import React from "react";
import { useContext } from "react";
import { BioContext } from "./Context";

function ShowDetail(){

    const {name,age,id,fname,mname,gender,dob}=useContext(BioContext);

    return(
        <div className="details">
            <div className="showcard">
                <h2>Bio-Data</h2>
                <p><strong>Name : </strong>{name}</p>
                <p><strong>Id : </strong>{id}</p>
                <p><strong>Age : </strong>{age}</p>
                <p><strong>Gender : </strong>{gender}</p>
                <p><strong>Dob : </strong>{dob}</p>
                <p><strong>Father Name : </strong>{fname}</p>
                <p><strong>Mother Name : </strong>{mname}</p>
            </div>
        </div>
    )
}

export default ShowDetail