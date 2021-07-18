import React from 'react'
import CourselCard from "./CourselCard"
// import Carousel from 'react-elastic-carousel';


function Coursel() {

    // const breakPoints=[
    //     {width:500,itemsToShow:1},
    //     {width:768,itemsToShow:2},
    //     {width:1200,itemsToShow:3},
    //     {width:1500,itemsToShow:4},
    // ]
    return (
        <>
                <section id="instructors" class="p-5 mt-5">
                    <div class="container text-center">
                           <h5 class=" text-white">Experience brainSPARK-ing</h5>
                           
                           
                                  <CourselCard/>
                          
                    </div>
                </section>
        </>
    )
}

export default Coursel
