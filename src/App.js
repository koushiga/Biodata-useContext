import { useState } from 'react';
import './App.css';
import { BioContext } from './Context';
import Register from './Register';
import ShowDetail from './ShowDetails';

function App() {

  const [name,setName]=useState("");
  const [id,setId]=useState();
  const [dob,setDob]=useState();
  const [age,setAge]=useState();
  const [gender,setGender]=useState();
  const [fname,setFname]=useState("");
  const [mname,setMname]=useState("");
  const [showDetail,setShowDetail]=useState(false);

  return (
    <div className="App">
      <BioContext.Provider value={{name,setName,id,setId,dob,setDob,age,setAge,gender,setGender,fname,setFname,mname,setMname,setShowDetail}}>
        {showDetail?<ShowDetail/>:<Register/>}
      </BioContext.Provider>
    </div>
  );
}

export default App;
