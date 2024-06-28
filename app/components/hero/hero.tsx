import React from "react";
import styles from '../hero/hero.module.css';
import { Grid, Button } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className={styles.hero_section}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <p>Welcome to Realestate</p>
                    <h1>Manage Your <br /> Property</h1>
                    <p>Your will have everything nearby supermarket, buses, <br />
                        station, the carmen neighborhood, etc </p>
                    <input className={styles.customTextField} id="email" placeholder="Enter your email" />
                    <Button className={styles.customButton}>Get a Quote</Button>
                </Grid>
                <Grid item xs={6}>
                    <Image src="/image2.png" width={500} height={500} alt='hero-section' className={styles.hero_image_section}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default HeroSection;
