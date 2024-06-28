import React from "react";
import styles from './footer.module.css';
import { Grid, TextField, Button } from '@mui/material';
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footer_section}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1>Subscribe Our Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit <br />
                        pellentesque sollicitudin. Egestas faucibus lacus diam in senectus <br />
                        consectetur. Mattis elit adipiscing quisque tellus scelerisque <br />
                        vehicula ante nunc.</p>
                    <input className={styles.customTextField} id="email" placeholder="Enter your email" />
                    <Button className={styles.customButton}>Get a Quote</Button>
                </Grid>
                <Grid item xs={6}>
                    <Image src="/image1.png" width={500} height={500} alt='footer-section' className={styles.image_section}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Footer;
