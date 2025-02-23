import React from 'react';
import styles from '../header/header.module.css';
import { Grid, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='header-section'>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <svg width="94" height="28" viewBox="0 0 94 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
                        <rect y="11.5" width="16" height="16" rx="2" fill="#1E1E1E" />
                        <rect x="5" y="15.5" width="6" height="9" fill="white" />
                        <path d="M4.56852 4.93276C6.23159 2.54209 9.76841 2.54209 11.4315 4.93276C13.3595 7.70433 11.3762 11.5 8 11.5C4.62376 11.5 2.64046 7.70433 4.56852 4.93276Z" fill="#1E1E1E" />
                        <path d="M85.0554 10.412C86.8314 10.412 88.3834 10.772 89.7114 11.492C91.0554 12.196 92.0874 13.188 92.8074 14.468C93.5274 15.748 93.8874 17.212 93.8874 18.86C93.8874 20.492 93.5194 21.948 92.7834 23.228C92.0634 24.508 91.0314 25.516 89.6874 26.252C88.3594 26.972 86.8154 27.332 85.0554 27.332H78.3594V10.412H85.0554ZM84.6954 23.18C86.0714 23.18 87.1514 22.804 87.9354 22.052C88.7194 21.3 89.1114 20.236 89.1114 18.86C89.1114 17.468 88.7194 16.396 87.9354 15.644C87.1514 14.876 86.0714 14.492 84.6954 14.492H83.0634V23.18H84.6954Z" fill="#1E1E1E" />
                        <path d="M71.2743 23.732H76.5303V27.332H66.5703V10.412H71.2743V23.732Z" fill="#1E1E1E" />
                        <path d="M63.8915 10.412V27.332H59.1875V10.412H63.8915Z" fill="#1E1E1E" />
                        <path d="M46.7095 10.412V20.228C46.7095 21.14 46.9175 21.844 47.3335 22.34C47.7655 22.836 48.4135 23.084 49.2775 23.084C50.1415 23.084 50.7895 22.836 51.2215 22.34C51.6695 21.828 51.8935 21.124 51.8935 20.228V10.412H56.5975V20.228C56.5975 21.78 56.2695 23.108 55.6135 24.212C54.9575 25.3 54.0615 26.124 52.9255 26.684C51.8055 27.228 50.5575 27.5 49.1815 27.5C47.8055 27.5 46.5735 27.228 45.4855 26.684C44.4135 26.124 43.5655 25.3 42.9415 24.212C42.3335 23.124 42.0295 21.796 42.0295 20.228V10.412H46.7095Z" fill="#1E1E1E" />
                        <path d="M36.8 18.644C37.792 18.868 38.576 19.364 39.152 20.132C39.744 20.884 40.04 21.748 40.04 22.724C40.04 24.164 39.544 25.292 38.552 26.108C37.56 26.924 36.168 27.332 34.376 27.332H26V10.412H34.112C35.84 10.412 37.192 10.796 38.168 11.564C39.16 12.332 39.656 13.412 39.656 14.804C39.656 15.796 39.392 16.628 38.864 17.3C38.352 17.956 37.664 18.404 36.8 18.644ZM30.704 17.132H33.08C34.264 17.132 34.856 16.644 34.856 15.668C34.856 14.66 34.264 14.156 33.08 14.156H30.704V17.132ZM33.44 23.54C34.624 23.54 35.216 23.044 35.216 22.052C35.216 21.54 35.056 21.148 34.736 20.876C34.432 20.604 33.992 20.468 33.416 20.468H30.704V23.54H33.44Z" fill="#1E1E1E" />
                    </svg>
                </Grid>
                <Grid item xs={1}>
                    <Link href="/about">
                        <p>About us</p>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link href="/projects">
                        <p>Projects</p>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <p>Agents</p>
                </Grid>
                <Grid item xs={1}>
                    <p>Services</p>
                </Grid>
                <Grid item xs={1}>
                    <p>Listings</p>
                </Grid>
                <Grid item xs={1}>
                    <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 22L20 20" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </Grid>
                <Grid item xs={1}>
                    <p>Other services</p>
                </Grid>
                <Grid item xs={1}>
                    <Button className={styles.customButton}>Contact us</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;