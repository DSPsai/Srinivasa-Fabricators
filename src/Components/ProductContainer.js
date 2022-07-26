import React, { useState } from 'react'
import { Box } from '@mui/system'
import HomeStyle from '../Styles/HomeStyle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProductCard from './ProductCard';
import { shedData, shutterData } from './data';
export default function ProductContainer(props) {
    const [products1, setProducts1] = useState(props.cat == 'Sheds' ? shedData : shutterData)
    const [scrolled, setScrolled] = useState(window.innerWidth / products1.length)
    var before = true
    const scroll = (bol) => {
        let width = window.innerWidth / products1.length
        if (scrolled < 0) {
            setScrolled(0)
            document.getElementById(props.id).scrollBy({
                left: 0, behavior: "smooth"
            });
            return
        }
        let tscr = parseInt(('' + scrolled).split('').join(''))
        if (bol) {
            before = false
            document.getElementById(props.id).scrollBy({
                left: tscr + width, behavior: "smooth"
            });
            setScrolled(tscr + width)
        } else {
            if (before) {
                document.getElementById(props.id).scrollBy({
                    left: tscr - (width + window.innerWidth), behavior: "smooth"
                });
                before = true
            } else
                document.getElementById(props.id).scrollBy({
                    left: tscr - width, behavior: "smooth"
                });
            setScrolled(tscr - width)
        }
    }
    return (
        <div>
            <Box
                sx={{ display: 'flex', alignItems: "center" }}
            >
                <Box sx={{ width: { md: 'auto', xs: '0px' } }} onClick={() => {
                    scroll(false)
                }}><Button sx={HomeStyle.HomeSideBut} endIcon={<ChevronLeftIcon sx={HomeStyle.HomeSideButI} />}></Button></Box>
                <Box id={props.id} className='ProductsContainer' sx={{
                    width: '100%',
                    display: 'flex',
                    overflowX: 'scroll'
                }}>
                    {products1.map(prod => {
                        return <ProductCard
                            img={prod.img}
                            name={prod.name}
                            price={prod.price}
                            setImg={props.setImg}
                            iCat={prod.name}
                            cat={props.cat}
                            id={prod.productId}
                        />
                    })}
                    {/* {Array.from(Array(9).keys()).map((item) => (<ProductCard img='/Images/hero-img.png' setImg={props.setImg} />))} */}
                </Box>
                <Box sx={{ width: { md: 'auto', xs: '0px' } }} onClick={() => {
                    scroll(true)
                }}><Button sx={HomeStyle.HomeSideBut} endIcon={<ChevronRightIcon sx={HomeStyle.HomeSideButI} />}></Button></Box>
            </Box>
        </div>
    )
}
