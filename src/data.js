import img1 from './images/family.jpeg';
import img2 from './images/family2.jpeg';
import img3 from './images/xin.jpeg';

let data = {
    "success" : true,
    "data" : {
        "memes": [
            {
                "id":"2341234",
                "name":"Fei",
                "url":img1,
                "width":450,
                "height":550,
                "box_count":2
            },
            {
                "id":"3234552",
                "name":"Gu",
                "url":img2,
                "width":450,
                "height":550,
                "box_count":3
            },
            {
                "id":"938432",
                "name":"Tie",
                "url":img3,
                "width":450,
                "height":550,
                "box_count":5
            }

        ]
    }
}

export default data;