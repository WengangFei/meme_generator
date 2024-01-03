import { useState } from "react";
import Image from './displayImage';
import show from '../images/family.jpeg';
import Infor from './information';

export default function Form({data}){
    
    let [url,setUrl] = useState(show)
    function handClick(){
        let arr = data.data.memes;
        let index = Math.floor(Math.random()*(arr.length-0)+0);
        setUrl(arr[index].url)
      
    }


   
    return (
        <div>
            <div className="form">   
                <input className="form--input" type="text" placeholder="Shut Up"/>
                <input className="form--input" type="text" placeholder="and Take my money"/>
                <button className="form--button" onClick={ handClick }>Get a new meme image</button> 
            </div>
            <div>
                <Image url={url}/> 
            </div>
            <div className="information">
                <Infor />
            </div>
       
        </div>
    );
}

