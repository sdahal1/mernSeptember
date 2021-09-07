import React, {useState} from 'react';
// import styles from './MyButtonComponent.module.css';
import styles from './Form.module.css';
// import './Form.module.css';

const NinjaForm = (props) => {

    const [formInfo, setFormInfo] = useState({
       name:"",
       imgLink: "",
       numProj: "",
       favHobby: "",
       favColor:""
    })

    // const [listOfNinjas, setListOfNinjas] = useState([])

    const changeHandler = (e)=>{
        console.log("you are changing some input-->", e.target.name, e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })

    }

    //our submit handler, you can name this whatever makes sense
    const addNinja = (e)=>{
        e.preventDefault();
        console.log("submitted the form!")
        console.log(formInfo)
        // listOfNinjas.push(formInfo)
        //const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];


        //add to the list(array) of ninjas the new object containing information from the form (the object represnts the info about a new ninja)
        props.setListOfNinjas([...props.listOfNinjas,formInfo ])

        //i am setting form info to be an object with empty values for its keys again so that I can make the inputs show these values to clear the from out after submitting
        setFormInfo({
            name:"",
            imgLink: "",
            numProj: "",
            favHobby: "",
            favColor:""
         })
        
    }


    return (
        <div>
            <form className = {styles.newNinjaForm} onSubmit={(e)=>addNinja(e)}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="name" id="" className="form-control" value = {formInfo.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Link:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="imgLink" id="" className="form-control" value = {formInfo.imgLink}  />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="number" name="numProj" id="" className="form-control" value = {formInfo.numProj}  />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Hobby:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favHobby" id="" className="form-control" value = {formInfo.favHobby}  />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favColor" id="" className="form-control" value = {formInfo.favColor}  />
                </div>
                <input type="submit" value="Add to Wall of Ninjas" className= "btn btn-success mt-3" />
            </form>
            <hr />

            
        </div>
    );
};


export default NinjaForm;