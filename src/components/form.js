import { useState } from "react";

export default function Form({data}){

    let arr = data.data.memes;
    let show = arr.map((item)=><p>{item.name}</p>);
    let [flag,setFlag] = useState(false)
    function handClick(){
        flag ? setFlag(false) : setFlag(true)
        flag = true;
    }
    
    return (
        <div>
            <div className="form">   
                <input className="form--input" type="text" placeholder="Shut Up"/>
                <input className="form--input" type="text" placeholder="and Take my money"/>
                <button className="form--button" onClick={ handClick }>Get a new meme image</button> 
            </div>
            <div>
                { flag && show }
            </div>
        </div>
        
    );
}

