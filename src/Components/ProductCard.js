import React from 'react'
import HomeStyle from '../Styles/HomeStyle'
import { Box } from '@mui/system'
import {
    useNavigate,
} from 'react-router-dom';
export default function ProductCard(props) {
    const go = useNavigate()
    return (
        <Box className='card' onClick={() => {
            props.setImg(props.img)
            go(`/Product/${props.cat + '/' + props.iCat + '/' + props.id}`)
        }} sx={HomeStyle.ProductCardContainer}>
            <Box sx={HomeStyle.ProductCardImgB}>
                <img className='cardImage' src={props.img} alt="" />
            </Box>
            <div className='cardName'>{props.name}</div>
            {/* <div className='cardPrice'>{props.price}</div> */}
        </Box>
    )
}
