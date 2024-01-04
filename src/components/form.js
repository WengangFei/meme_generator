import { useState } from "react";
import Image from './displayImage';
import Infor from './information';

export default function Form({data}){
    
    let initImageInformation = data.data.memes[0];
    //initial show image 
    let [url,setUrl] = useState(initImageInformation.url);
    let [topText,setTopText] = useState(initImageInformation.topText);
    let [bottomText,setBottomText] = useState(initImageInformation.bottomText);
    
    function handClick(){
        let arr = data.data.memes;
        let index = Math.floor(Math.random()*(arr.length-0)+0);
        setUrl(arr[index].url)
        setTopText(arr[index].topText);
        setBottomText(arr[index].bottomText);
    }

   
    return (
        <div>
            <div className="form">   
                <input className="form--input" type="text" value={topText} />
                <input className="form--input" type="text" value={bottomText}/>
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

