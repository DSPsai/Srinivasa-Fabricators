import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import '../Styles/Home.css'
import HomeProd from './HomeProd'
export default function Home(props) {
    const scroller = (e, tsec, bsec) => {
        // console.log(e)
        e.preventDefault();
        e.stopPropagation();
        // let scr;
        if (e.deltaY > 0) {
            bsec.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        } else {
            tsec.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }
    const swipe = (num) => {
        let div;
        if (num == 1) {
            div = document.getElementById('root')
        } else if (num == 2)
            div = document.getElementById('herosection2')
        else if (num == 3)
            div = document.getElementById('herosection3')
        else
            div = document.getElementById('footer')
        div.scrollIntoView();
    }
    useEffect(() => {
        const url = decodeURIComponent(window.location.href).split('/')
        const sec = localStorage.getItem('redirectUrl')
        const sec1 = document.getElementById('herosection1');
        const sec2 = document.getElementById('herosection2');
        const sec3 = document.getElementById('herosection3');
        const sec4 = document.getElementById('footer');
        if (sec) {
            document.getElementById(sec).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
            localStorage.removeItem('redirectUrl')
        }
        if (window.innerWidth > 650) {
            sec1.addEventListener('wheel', (e) => scroller(e, sec1, sec2), {
                passive: false
            });
            sec2.addEventListener('wheel', (e) => scroller(e, sec1, sec3), {
                passive: false
            });
            sec3.addEventListener('wheel', (e) => scroller(e, sec2, sec4), {
                passive: false
            });
            return () => {
                sec1.removeEventListener('wheel', (e) => scroller(e, sec1, sec2), {
                    passive: false
                })
                sec2.removeEventListener('wheel', (e) => scroller(e, sec1, sec3), {
                    passive: false
                });
                sec3.removeEventListener('wheel', (e) => scroller(e, sec2, sec4), {
                    passive: false
                });
            };
        } else {
        }
    }, [])
    return (
        <div className='scrollSmooth'>
            <Box className='scrollSmooth' id='herosection1' sx={{
                height: { md: 'calc(100vh - 120px)', xs: 'calc(100vh - 80px)' },
                marginLeft: '5vw',
                marginRight: '5vw',
                display: 'flex',
                // width: '50vw',
                alignItems: 'center',
                flexFlow: { xs: 'column', md: 'row' }
            }}>
                <img className='imgCrt1' style={{
                    height: '100%',
                    objectFit: 'contain',
                    maxWidth: '40vw',
                    maxHeight: '70vh'
                }} src='/Images/hero-img.png' />
                <Box sx={{
                    width: { md: '40vw', xs: '80vw' },
                    textAlign: 'initial'
                }}>
                    <Box
                        sx={{
                            fontSize: { md: '6.6vw', xs: '6vh' },
                            fontWeight: '900',
                        }}
                    ><span className='cNameH'>S</span>RINIVASA<br /><span className='cNameH'>F</span>ABRICATORS</Box>
                    <Box
                    >
                        <span className='Herosmalls1'>All types of </span>&ensp;<span className='Herobigs1'>Sheds</span> <br />
                        <span className='Herosmalls1'>and</span>&ensp;<span className='Herobigs1'>Shutters</span>&ensp;<span className='Herosmalls1'>works</span>
                    </Box>
                </Box>
            </Box>
            <Box className='scrollSmooth'>
                <HomeProd id='herosection2' setImg={props.setImg} />
            </Box>
            <Box className='scrollSmooth' id='herosection3' sx={{
                minHeight: '100vh'
            }}>
                <Box className='HomeSide'
                    sx={{
                        fontSize: { md: '5vw', xs: '5vh' }, maxWidth: '1000px', textAlign: 'initial', paddingLeft: '5vw'
                    }}
                >
                    About Us
                </Box>
                <div id='about' style={{ display: 'flex' }}>
                    <div className='about-component'>
                        <img src='/Images/handsHero.png' />
                        <div className="about">
                            {/* <h1 style={{ fontSize: '40px', fontFamily: "Poppins", padding: '0' }}>About Us</h1> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis magna dictum, congue magna non, interdum risus. Morbi non orci a quam venenatis tristique at eu nisi. Cras at arcu vel dui luctus hendrerit eget pulvinar lectus. Phasellus dapibus condimentum tempor. Aenean ultricies, enim auctor interdum eleifend, nibh mauris suscipit neque, vel suscipit nulla magna vel ipsum. Nullam tempor fermentum felis a ultricies. Donec aliquet diam ligula, nec dictum enim pulvinar in. Aenean suscipit leo ipsum, et aliquam velit tincidunt molestie. Ut sed convallis arcu.
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </div >
    )
}
