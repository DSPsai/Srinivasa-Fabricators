import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import HomeStyle from '../Styles/HomeStyle';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
    const iconSize = {
        fontSize: '40px !important'
    }
    return (
        <div id='footer'>
            <Box sx={{
                backgroundColor: 'rgba(168, 168, 168, 0.58)',
                padding: '20px 5vw',
                display: 'flex',
                justifyContent: 'space-between',
                flexFlow: { xs: 'column', md: 'row' }
                // height: '100px'
            }}>
                <Box sx={{
                    width: '150px',
                    height: '150px',
                    marginLeft: '30px',
                    marginRight: '30px'
                }}>
                    <img style={{ objectFit: 'fill', width: '100%', height: '100%' }} src="/Images/logo.png" />
                </Box>
                <Box>
                    <Typography sx={HomeStyle.FooterLinks} variant='h4'>Home</Typography>
                    <Typography sx={HomeStyle.FooterLinks} variant='h4'>Products</Typography>
                    <Typography sx={HomeStyle.FooterLinks} variant='h4'>About</Typography>
                    <Typography sx={HomeStyle.FooterLinks} variant='h4'>Contact Us</Typography>
                </Box>
                <Box sx={{}}>
                    <Typography sx={{
                        ...HomeStyle.FooterLinks,
                        textAlign: 'center',
                        '&:hover': { color: 'black' }
                    }} variant='h4'>Our Address : </Typography>
                    <Box sx={{
                        fontSize: '27px'
                    }}>Plot no : 638, Matrusri nagar,<br />
                        Miyapur 'x' road,<br />
                        Hyderabad-500050
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'row' }}>
                        <CallIcon sx={iconSize} />&emsp;
                        <Typography sx={{
                            ...HomeStyle.FooterLinks,
                            textAlign: 'center',
                            '&:hover': { color: 'black' }
                        }} variant='h4'>8686485748</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'row' }}>
                        <WhatsAppIcon sx={iconSize} />&emsp;
                        <Typography sx={{
                            ...HomeStyle.FooterLinks,
                            textAlign: 'center',
                            '&:hover': { color: 'black' }
                        }} variant='h4'>8686485748</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
