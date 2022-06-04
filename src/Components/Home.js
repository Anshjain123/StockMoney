import React from 'react'
import FrontPageNews from './FrontPageNews'
import Stats from './Stats'
function Home(props) {
    // console.log("DEBUG")
    return (
        <>
        <div>
            <div className='app__container'>
                <div className="flex">
                    <div className="Stats">
                        <Stats/>
                    </div>
                    <div className="FrontPageNews" style = {{marginLeft:'50px'}}>
                        <FrontPageNews category = {props.category}/>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Home