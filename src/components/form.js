import { useState, useEffect } from "react";
import Image from './displayImage';
import Information from './information';

export default function Form(){

    // let initImageInformation = data.data.memes[0];
    //initial show image 
    let [data,setData] = useState('');
    let [index,setIndex] = useState(0);
    
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(resp=>resp.json())
        .then(resp=>setData(resp.data.memes))
    },[]);
    
    // let [topText,setTopText] = useState(initImageInformation.topText);
    // let [bottomText,setBottomText] = useState(initImageInformation.bottomText);
    let [formData, setFormData] = useState({
        email: '',
        password: '',
        re_password: '',
        checkbox: false,
    }); 

    let [imageText,setImageText] = useState({
        top: '',
        bottom: '',
    });

    function writeTextOnImage(e){
        let { name,value } = e.target;
        setImageText(prev=>({
            ...prev,
            [name]: value,
        }));
    }



    function handClick(){
        // let arr = data.data.memes;
        let index = Math.floor(Math.random()*(data.length-0)+0);
        setIndex(index);
        // setTopText(arr[index].topText);
        // setBottomText(arr[index].bottomText);
    }

    

    function handleOnChange(e){

        let { name,value,type,checked } = e.target;
        // console.log(checked)
        setFormData(prev=>({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    // console.log(formData)
    function submitData(e){
        e.preventDefault();
        if(formData.password !== formData.re_password){
            alert('Passwords are not matching!');
        }
        
        else{
            if(formData.checkbox){
                alert('Thanks signing up for premium.')
            }
            
            console.log(formData)
            alert('Log Successfully!')
        }
        
    }
    

    // let [input,setInput] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     textarea: 'My form',
    //     checkbox: false,
    //     radio: '',
    //     select:'',
    // });

    // function fun(e){
    //     let { name,value,type,checked } = e.target;
  
    //     setInput(prev=>({
    //         ...prev,
    //         [name]: type === 'checkbox' ? checked : value,
            
    //     }));
    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(input);
    // }

    
   
    return (
        <div><br />
            {/* <form onSubmit={ handleSubmit }>
                <input type='text' value={ input.firstName } 
                    onChange={ fun } name='firstName' />

                <input type='text' value={ input.lastName } 
                    onChange={ fun } name='lastName' />

                <input type='text' value={ input.email } 
                    onChange={ fun } name='email' /> <br/> <br /> 

                <textarea value={ input.textarea } name='textarea'
                    onChange={ fun }/> <br /><br />

                <input type='checkbox' id='isGood' checked={ input.checkbox }
                    onChange={ fun  } name='checkbox' /> 
                <label htmlFor='isGood'>Are you good?</label><br /><br />

                <fieldset>
                    <input type='radio' id='isGood' onChange={ fun } name='radio' 
                        value='good' checked={ input.radio === 'good'}/> 
                    <label htmlFor='isGood'>good</label><br />

                    <input type='radio' id='isGood' onChange={ fun } name='radio'
                        value='bad' checked={ input.radio === 'bad' } /> 
                    <label htmlFor='isGood'>bad</label>
                </fieldset><br />

                <label htmlFor='mySelect'>My color:</label><br />
                <select name='select' id='mySelect' onChange={ fun } value={ input.select } >
                    <option>-- Choose --</option>
                    <option>Green</option>
                    <option>Teal</option>
                    <option>White</option>
                    <option>Black</option>
                </select><br /><br />
         
                <button>Submit</button>
            </form> */}
            <h3>Sign up the game on below</h3>
            <div className="signUp">
                <form onSubmit={ submitData } className="signUpForm">
                    <h5>Email:</h5>
                    <input type='email' placeholder='Enter your email' name='email' 
                           onChange={ handleOnChange }/>

                    <h5>Password:</h5>
                    <input type='password' placeholder='Enter your pin' name='password' 
                            onChange={ handleOnChange }/>

                    <h5>Re-Enter Password:</h5>
                    <input type='password' placeholder='Re-Enter your pin' name='re_password'
                            onChange={ handleOnChange }/><br /><br />

                    <input type='checkbox' id='join' checked={ formData.check } 
                            name='checkbox' onChange={ handleOnChange } />
                    <label htmlFor='join' >Join the premium</label><br /><br />

                    <button className="submit">Submit</button><br /><br />
                </form>
            </div>
           

            <div className="form">   
                <input className="form--input" type="text" placeholder='top tex' 
                name='top' onChange={ writeTextOnImage }/>
                <input className="form--input" type="text" placeholder="bottom text"
                name='bottom' onChange={ writeTextOnImage }/>
                <button className="form--button" onClick={ handClick }>Get a new meme image</button> 
            </div>
            <div>
                <Image url={ data ? data[index].url : '' } imagetext={ imageText }/> 
            </div>
            <div className="information">
                <Information />
            </div>
        </div>
    );
}

