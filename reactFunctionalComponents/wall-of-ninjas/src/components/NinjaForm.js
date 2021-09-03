import React, {useState} from 'react';
// import styles from './MyButtonComponent.module.css';
import styles from './Form.module.css';
// import './Form.module.css';

const NinjaForm = () => {

    const [formInfo, setFormInfo] = useState({
       name:"",
       imgLink: "",
       numProj: "",
       favHobby: "",
       favColor:""
    })

    const [listOfNinjas, setListOfNinjas] = useState([])

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
        setListOfNinjas([...listOfNinjas,formInfo ])

        //i am setting form info to be an object with empty values for its keys again so that I can make the inputs show these values to clear the from out after submitting
        setFormInfo({
            name:"",
            imgLink: "",
            numProj: "",
            favHobby: "",
            favColor:""
         })
        
    }

    //delete a ninja
    const deleteNinja = (e,idxOfPersonIWantToDelete)=>{
        console.log("we are trying to delete this ninja:",idxOfPersonIWantToDelete)

        //goal is to delete something at index i (which represents the index number of the ninja we clicked delete on) from the listOfNinjas array

        //two ways to accomplish this goal
        //1st way--> filter()
        let newListOfNinjas = listOfNinjas.filter((ninja,idx)=>{
            return idx !== idxOfPersonIWantToDelete //return back a new array of objects where idx != i--> idx is the index number of each item in the list of ninjas. i is the index number of the ninja we want to delete
        })
        console.log("new list of ninjas after deleting looks like this: ", newListOfNinjas)
        setListOfNinjas(newListOfNinjas);

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

            {
                listOfNinjas.map((ninja,i) =>{
                    return <div key = {i} style = {{backgroundColor: ninja.favColor}} className={`card ${styles.ninja}`}>
                    <img width= "150px" height= "150px" src={ninja.imgLink} alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">{ninja.name}</h4>
                      <p className="card-text">
                       Favorite Hobby: {ninja.favHobby}
                      </p>
                      <button onClick = {(e)=>deleteNinja(e,i)} className="btn btn-danger">Retire</button>
                    </div>
                  </div>
                })
            }
        </div>
    );
};


export default NinjaForm;