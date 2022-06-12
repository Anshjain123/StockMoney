import React, { useEffect, useContext } from 'react'
import FrontPageNews from './FrontPageNews'
import Stats from './Stats'
import StockContext from '../Context/stocks/StockContext'
function Home(props) {
    // console.log("DEBUG")
    const { state, getstocks, dispatch } = useContext(StockContext);
    useEffect(async () => {
        let res = await getstocks();
        console.log(res, "YEah");
        dispatch({
            type: "getstocks",
            items: res
        })
    }, [])
    return (
        <>
            <div>
                <div className='app__container'>
                    <div className="flex">
                        <div className="Stats">
                            <Stats />
                        </div>
                        <div className="FrontPageNews" style={{ marginLeft: '50px' }}>
                            <FrontPageNews category={props.category} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home