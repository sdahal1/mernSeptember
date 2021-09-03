import React, {useState} from 'react';

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

    const addNinja = (e)=>{
        e.preventDefault();
        console.log("submitted the form!")
        console.log(formInfo)
        // listOfNinjas.push(formInfo)
        //const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

        setListOfNinjas([...listOfNinjas,formInfo ])
        
    }




    return (
        <div>
            <form onSubmit={(e)=>addNinja(e)}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="name" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Link:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="imgLink" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="number" name="numProj" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Hobby:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favHobby" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favColor" id="" className="form-control" />
                </div>
                <input type="submit" value="Add to Wall of Ninjas" className= "btn btn-success mt-3" />
            </form>
            <hr />

            {
                listOfNinjas.map((ninja,i) =>{
                    return <div key = {i}style = {{backgroundColor: ninja.favColor}} className="card">
                    <img width= "150px" src={ninja.imgLink} alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">{ninja.name}</h4>
                      <p className="card-text">
                       Favorite Hobby: {ninja.favHobby}
                      </p>
                      {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                })
            }
        </div>
    );
};


export default NinjaForm;