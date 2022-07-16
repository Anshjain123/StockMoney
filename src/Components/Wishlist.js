import React, { useContext, useState, useEffect } from 'react'
import './Wishlist.css'
import StockContext from '../Context/stocks/StockContext'
import Wishlistitem from './Wishlistitem';
import FlipMove from 'react-flip-move';
import { Card } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WishlistCompanyStocks from './WishlistCompanyStocks';


function Wishlist() {
    const { state, getstocks, dispatch } = useContext(StockContext);
    const [AllCryptoStocks, setAllCryptoStocks] = useState([])
    const [AllCompanyStocks, setAllCompanyStocks] = useState([])


    // console.log(state);

    const apikey = process.env.REACT_APP_FINNHUB_API_KEY;
    const cryptoStocks = state.cryptoStocks;
    const companyStocks = state.companyStocks;

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [companyexpand, setcompanyexpand] = useState(false);

    const handlecompanychange = (panel) => (event, isExpanded) => {
        setcompanyexpand(isExpanded ? panel : false);
    };

    let realname = {
        "AAPL": "Apple",
        "MSFT": "Microsoft",
        "GOOGL": "Google",
        "AMZN": "Amazon",
        "TSLA": "Tesla",
        "FB": "Meta (Facebook)",
        "TSM": "TSMC",
        "V": "Visa",
        "NVDA": "NVIDIA",
        "TCEHY": "Tencent",
        "XOM": "Exxon Mobil",
        "JPM": "JPMorgan Chase",
        "PG": "Procter & Gamble",
        "WMT": "Walmart",
        "MA": "Mastercard"
    }
    useEffect(async () => {
        let res = await getstocks();
        dispatch({
            type: "getstocks",
            items: res
        })
        let arr = [];
        for (let i = 0; i < cryptoStocks.length; i++) {
            const response = await fetch(`https://data.messari.io/api/v1/assets/${cryptoStocks[i]}/metrics`,);
            const res = await response.json();
            arr.push(res);
        }
        setAllCryptoStocks(arr);
        let arr2 = [];
        for (let i = 0; i < companyStocks.length; i++) {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${companyStocks[i]}&token=${apikey}`);
            const res = await response.json();
            res.name = companyStocks[i];
            res.realname = realname[companyStocks[i]];
            arr2.push(res);
        }
        setAllCompanyStocks(arr2);

    }, [])
    // console.log(AllCompanyStocks); 
    const height = window.innerHeight;
    return (
        <div className="wishlist" style={{ height: height, }}>
            <Accordion expanded={companyexpand === 'panel1'} onChange={handlecompanychange('panel1')} style={{ margin: '25px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '800', fontFamily: 'Georgia', fontSize: '25px', textAlign: 'center' }}>
                        Companystocks
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ maxHeight: '445px', marginTop: '-30px' }}>


                    <div style={{ width: '100%', height: 'auto', maxHeight: '500px', display: 'flex', flexDirection: 'column', padding: '30px' }}>

                        {AllCompanyStocks.length > 0 && <table style={{ flex: 0.1 }} >
                            <tbody>
                                <tr style={{ justifyContent: 'space-around', display: 'flex', fontFamily: "Georgia", fontSize: '20px', height: '30px' }}>
                                    <th style={{ flex: 0.1 }}>
                                        Company
                                    </th>
                                    <th style={{ flex: 0.1 }}>
                                        Symbol
                                    </th>
                                    <th style={{ flex: 0.1 }}>
                                        Change
                                    </th>
                                    <th style={{ flex: 0.15 }}>
                                        %Change
                                    </th>
                                    <th style={{ flex: 0.12 }}>
                                        Current Price
                                    </th>
                                </tr>
                            </tbody>
                        </table>}

                        <Card className='Wishlist__data' style={{ marginTop: '25px', overflowY: 'scroll', maxHeight: '350px' }} >
                            <FlipMove>
                                {AllCompanyStocks.map((element, index) => {
                                    return <div style={{ height: '50px' }} key={index}>
                                        <WishlistCompanyStocks element={element} AllStocks={AllCompanyStocks} setAllStocks={setAllCompanyStocks} />
                                    </div>
                                })}
                            </FlipMove>
                        </Card>

                        {AllCompanyStocks.length === 0 && <Typography style={{ color: 'rgb(19, 25, 33)', fontSize: '20px', fontWeight: '800', textAlign: 'center' }}>No data to display please add some data in your wishlist</Typography>}
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ margin: '25px', backgroundColor: 'rgb(19, 25, 33)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: '800', fontFamily: 'Georgia', fontSize: '25px', textAlign: 'center', color: 'white' }}>
                        Cryptocurrency stocks
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ maxHeight: '449px', marginTop: "-30px" }}>


                    <div className="wishlist__crypto" style={{ width: '100%', height: 'auto', maxHeight: '500px', display: 'flex', flexDirection: 'column', padding: '30px' }}>

                        {AllCryptoStocks.length > 0 && <table style={{ flex: 0.1 }} >
                            <tbody>
                                <tr style={{ justifyContent: 'space-around', display: 'flex', fontFamily: "Georgia", fontSize: '20px', color: 'white', height: '30px' }}>
                                    <th style={{ flex: 0.1 }}>
                                        Name
                                    </th>
                                    <th style={{ flex: 0.1 }}>
                                        Symbol
                                    </th>
                                    <th style={{ flex: 0.1 }}>
                                        Low
                                    </th>
                                    <th style={{ flex: 0.1 }}>
                                        High
                                    </th>
                                    <th style={{ flex: 0.1 }}>
                                        %Change
                                    </th>
                                    <th style={{ flex: 0.11 }}>
                                        Price
                                    </th>
                                </tr>
                            </tbody>
                        </table>}

                        <Card className='Wishlist__data' style={{ marginTop: '25px', overflowY: 'scroll', maxHeight: '350px' }} >
                            <FlipMove>
                                {AllCryptoStocks.map((element, index) => {
                                    return <div style={{ height: '50px' }} key={index}>
                                        <Wishlistitem element={element} AllStocks={AllCryptoStocks} setAllStocks={setAllCryptoStocks} />
                                    </div>
                                })}
                            </FlipMove>
                        </Card>
                        {AllCryptoStocks.length === 0 && <Typography style={{ color: 'white', fontSize: '20px', fontWeight: '800', textAlign: 'center' }}>No data to display please add some data in your wishlist</Typography>}
                    </div>
                </AccordionDetails>
            </Accordion>

            <div style={{ width: '100%', height: '100px' }}></div>
        </div>
    )

}

export default Wishlist