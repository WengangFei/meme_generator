import img1 from './images/family.jpeg';
import img2 from './images/family2.jpeg';
import img3 from './images/xin.jpeg';

let data = {
    "success" : true,
    "data" : {
        "memes": [
            {
                "id":"2341234",
                "topText":"Whole Family",
                "url":img1,
                "width":450,
                "height":550,
                "bottomText":'Three kids'
            },
            {
                "id":"3234552",
                "topText":"In Kitchen",
                "url":img2,
                "width":450,
                "height":550,
                "bottomText":'Kids are drinking milk',
            },
            {
                "id":"938432",
                "topText":"Back Yard Play",
                "url":img3,
                "width":450,
                "height":550,
                "bottomText":'Drift in Backyard',
            }

        ]
    }
}

export default data;