import { borderBottom, Box } from '@mui/system'
import React from 'react'
import {
    useNavigate,
} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
export default function Nav() {
    const go = useNavigate()
    const change = (sect) => {
        const url = decodeURIComponent(window.location.href).split('/')
        try {
            localStorage.setItem('redirectUrl', sect)
            document.getElementById(sect).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        } catch (er) {
        }
        closemenu()
        go('/')
    }
    const closemenu = () => {
        document.getElementsByClassName('mobnav')[0].style.left = '100vw'
    }
    return (
        <div>
            <Box sx={{
                width: '100%',
                height: '125px',
                display: 'flex',
                borderBottom: ' 2.9px solid red'
            }}>
                <Box sx={{
                    width: '150px',
                    height: '130px',
                    marginLeft: '30px'
                }}>
                    <img style={{ objectFit: 'fill', width: '100%', height: '100%' }} src="/Images/logo1.png" />
                </Box>
                {window.innerWidth < 500 && <MenuIcon onClick={() => {
                    document.getElementsByClassName('mobnav')[0].style.left = 0
                }} className='menuOpen' />}
                <Box className='mobnav' sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center'
                }}>
                    {window.innerWidth < 600 && <CloseIcon onClick={() => closemenu()} className='menuclose' />}
                    <span onClick={() => {
                        change('')
                    }} className='nav-links active'>
                        Home
                    </span>
                    <span onClick={() => {
                        change('herosection2')
                    }} className='nav-links'>
                        Products
                    </span>
                    <span onClick={() => {
                        change('herosection3')
                    }} className='nav-links'>
                        About
                    </span>
                    <span className='nav-links'>
                        Contact Us
                    </span>
                </Box>
            </Box>
        </div>
    )
}
