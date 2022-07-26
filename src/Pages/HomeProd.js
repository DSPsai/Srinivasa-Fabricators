import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ProductContainer from '../Components/ProductContainer'
import HomeStyle from '../Styles/HomeStyle'

export default function HomeProd(props) {
    return (
        <div id={props.id} style={{ minHeight: '100vh' }}>
            <Box
                sx={{ textAlign: 'initial', paddingLeft: '5vw', pr: '5vw' }}
            >
                <Box className='HomeSide'
                    sx={{
                        fontSize: '5vh !important', maxWidth: '1000px'
                    }}
                >
                    Our Products
                </Box>
                <Box
                // sx={{ textAlign: 'initial', paddingLeft: '5vw' }}
                >
                    <Box className='HomeSideHead'
                        sx={HomeStyle.HomeSideHead}>
                        Sheds :
                    </Box>
                    <ProductContainer id='Sheds' cat='Sheds' setImg={props.setImg} />
                </Box>
                <Box className='HomeSideHead'
                    sx={HomeStyle.HomeSideHead}>
                    Shutters :
                </Box>
                <ProductContainer id='Shutters' cat='Shutters' setImg={props.setImg} />
            </Box>
        </div>
    )
}
