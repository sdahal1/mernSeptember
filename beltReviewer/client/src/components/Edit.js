import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Edit = () => {
    const { idParam } = useParams();
    const history = useHistory(); //this is for redirecting when we submit the form


    const [ninjaInfo, setNinjaInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${idParam}`)
            .then(res=>{
                console.log("response when trying to get one ninja-->", res)
                setNinjaInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[])


    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
        if(e.target.type == "checkbox"){ //update state a little differently if the event target is the checkbox
            setNinjaInfo({
                ...ninjaInfo,
                isVeteran: !ninjaInfo.isVeteran
            })
        } else{//for all the other input types, update state as we normally do
            setNinjaInfo({ 
                ...ninjaInfo,
                [e.target.name]:e.target.value
            })

        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ninjas/${idParam}`, ninjaInfo )
            .then(res=>{
                console.log("response afer put request", res)
                history.push(`/ninja/${idParam}`);
            })
            .catch(err=> console.log("errrrr, ", err))
    }


    return (
        <div>
            <h1>Edit ninja with this id: </h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className="form-control" value = {ninjaInfo.name} />
                    {/* <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange = {changeHandler} type="number" name="numProjects" id="" className="form-control" value = {ninjaInfo.numProjects} />
                    {/* <p className="text-danger">{validationErrors.numProjects? validationErrors.numProjects.message:""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange = {changeHandler} type="date" name="graduationDate" id="" className="form-control" value = {ninjaInfo.graduationDate}/>
                    {/* <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input onChange = {changeHandler} type="text" name="profilePicUrl" id="" className="form-control" value = {ninjaInfo.profilePicUrl} />
                    {/* <p className="text-danger">{validationErrors.profilePicUrl?.message}</p> */}


                </div>
                <div className="form-group">
                    <label htmlFor="">Veteran?</label>
                    <input onChange = {changeHandler} type="checkbox" name="isVeteran" id="" checked = {ninjaInfo.isVeteran} />
                </div>
                {/* Veteran checkbox */}
                <input className= "btn btn-primary"type="submit" value="Update Ninja!" />

            </form>
        </div>
    );
};


export default Edit;