import {useState} from 'react';

export default function Information(){

    let [infor,setInfor] = useState({
        Name : 'The Simpsons',
        Creator : 'Mark',
        Release : 1989,
        Season : 54
    });

    let keys = Object.keys(infor);
    let show = keys.map((item)=><h4 key={item}>{ item } : { infor[item]},</h4>);

    
    return (
        <>
            { show }
            <button onClick={()=>setInfor(prev=>({
                    ...prev,
                    Creator: 'Jude',
                })
            )}>Change the Creator</button>
        </>
    );
} 