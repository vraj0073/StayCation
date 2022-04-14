import React from 'react'
import { useNavigate,useSearchParams } from 'react-router-dom';
import "../css/Deleteprofile.css";
import axios from 'axios';

export const Deleteprofile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const history = useNavigate()
    const validdelete= (e)=>{
        let confirm = e.target.value;
        alert(confirm)
        console.log("searchParams.query: ",searchParams.get("query"))
       let  email = searchParams.get("query")
        
        console.log("line 15 deleteprofile",email)
        if(confirm === 'Yes'){
            axios.post('https://staycationbackendapp.herokuapp.com/deleteprofile', {
             email: email
          })
          .then(function (response) {
            console.log(response);
            history('/login')
            
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        else{
            history('/profile')
        }


    }
  return (
      <>
      <div className='deletecontainer'>
    <h2>Are you sure you want to delete your Account.?</h2>
        <div id='deletevalue'>
        <input required type="radio" value="Yes" name="gender" onChange={validdelete}  /> Yes &nbsp;
        <input required type="radio" value="No" name="gender" onChange={validdelete} /> No &nbsp;
      </div>

      </div>
    
      </>
    
  )

}

export default Deleteprofile