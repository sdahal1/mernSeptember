import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const NewNinjaForm = () => {

    const history = useHistory(); //this is for redirecting when we submit the form

    let [formInfo, setFormInfo] = useState({
        name: "",
        numProjects: "",
        graduationDate: "",
        isVeteran: false,
        profilePicUrl: "",
        photo:""
    })

    let [validationErrors, setValidationErrors] = useState({})


    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
        if(e.target.type == "checkbox"){ //update state a little differently if the event target is the checkbox
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
        } else{//for all the other input types, update state as we normally do
            setFormInfo({ 
                ...formInfo,
                [e.target.name]:e.target.value
            })

        }
    }

    const handlePhoto = (e) => {
        setFormInfo({...formInfo, photo: e.target.files[0]});
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', formInfo.name);
        formData.append('numProjects', formInfo.numProjects);
        formData.append('graduationDate', formInfo.graduationDate);
        formData.append('isVeteran', formInfo.isVeteran);
        formData.append('profilePicUrl', formInfo.profilePicUrl);
        formData.append('photo', formInfo.photo);

        
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/ninjas',
            data: formData
            })
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){ //if there is validation errors
                    //do not redirect if there is validation errors
                    //store the errors object from the back end into a state variabel so i can display the state variable info on the page
                    setValidationErrors(res.data.err.errors)

                }else{ //if the form is filled out properly
                    history.push("/"); //this redirects to home if form is submitting properly

                }
            })
            .catch(err=>console.log("errrrrr-->", err))
    }

    return (
        <div>
            <h3>Create a new ninja below</h3>
            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange = {changeHandler} type="number" name="numProjects" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.numProjects? validationErrors.numProjects.message:""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange = {changeHandler} type="date" name="graduationDate" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input onChange = {changeHandler} type="text" name="profilePicUrl" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.profilePicUrl?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Upload picture:</label>
                    <input onChange = {handlePhoto} type="file" accept=".png, .jpg, .jpeg" name="photo" id="" className="form-control" />
                   
                </div>
                <div className="form-group">
                    <label htmlFor="">Veteran?</label>
                    <input onChange = {changeHandler} type="checkbox" name="isVeteran" id="" />
                </div>
                {/* Veteran checkbox */}
                <input className= "btn btn-primary"type="submit" value="Create Ninja!" />

            </form>
        </div>
    );
};


export default NewNinjaForm;