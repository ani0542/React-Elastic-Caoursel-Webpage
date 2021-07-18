import React from 'react'
import profile from "../assets/profile.png"
function Home() {
    return (
        <>
               <section
                //text-sm-start means in smaller device it ll start from start and above that center
                     class=" text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
                 >
                   <div class="container">
                           <div class="d-sm-flex align-items-center justify-content-between pt-5"> 
                                
                           <div>
                                   <h1>Enabling Kids to<br/>
                                      dream,discover & develop
                                   </h1>
                                    <p class="lead my-4">
                                        We focus on teaching our students the fundamentals of the latest
                                        and greatest technologies to prepare them for their first dev role
                                    </p>
                                    <button
                                        class="btnd btn-warning btn-lg p-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#enroll"
                                    >
                                          IT ALL BEGIN WITH A SPARK
                                    </button>
                            </div>

                            {/* //d-none d-sm- block means i dont want to show image in small device */}
                            <img
                                // class="img-fluid w-50 d-none d-sm-block"
                                className='img-fluid w-75  homeimg'
                                src={profile}
                                alt="error"
                            />

                           </div>
                   </div>
              </section>
        </>
    )
}

export default Home
