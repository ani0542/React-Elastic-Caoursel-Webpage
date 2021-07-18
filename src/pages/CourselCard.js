import React from 'react'
import { Card, Image } from "semantic-ui-react";
import { SliderData } from './SliderData';
import Carousel from 'react-elastic-carousel';


function CourselCard() {

    const breakPoints=[
        {width:500,itemsToShow:1},
        {width:768,itemsToShow:4},
        {width:1200,itemsToShow:3},
        {width:1500,itemsToShow:4},
    ]



    return (
        <div className='d-flex mt-3 '>
        <Carousel breakPoints={breakPoints}>
                 {
                    SliderData.map((value)=>{
                        // console.log(value)
                        return (
                            
                                <Card>
                                       <Image src={value.image}  className='img-fluid corimg'/>
                                </Card>
                         
                         
                        )
                    })
                 }
         </Carousel>
        </div>
    )
}

export default CourselCard
