import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { shedData, shutterData } from '../Components/data';

export default function Product(props) {
    const url = decodeURIComponent(window.location.href).split('/');
    const id = url.pop()
    const Cat = url.pop();
    const iCat = url.pop();
    const go = useNavigate()
    const curProd = Cat == 'Sheds' ? shedData.filter(dat => dat.productId == id) : shutterData.filter(dat => dat.productId == id)
    // console.log(curProd)
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <div>
            <Box sx={{
                mt: '20px', textAlign: 'initial', ml: '5vw', fontWeight: '600', fontSize: '25px'
            }}>
                <span style={{ cursor: 'pointer' }} onClick={() => {
                    go(-1)
                }}>Products</span> {'>'} {iCat} {'>'} <u>{Cat}</u>
            </Box>
            <Box sx={{ height: '70vh' }}>
                <img style={{ objectFit: 'contain', height: '70vh', maxWidth: '50vw' }} src={props.img || curProd[0].img} alt="" />
            </Box>
            <Box sx={{
                fontSize: '25px', m: '20px', fontWeight: '600'
            }}>{Cat}</Box>
        </div>
    )
}
