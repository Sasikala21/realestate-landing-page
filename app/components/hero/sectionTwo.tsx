import React from "react";
import styles from '../hero/sectionTwo.module.css';
import { Grid, Button } from '@mui/material';
import Image from 'next/image'

const SectionTwo = () => {
    return (
        <div className={styles.section_two}>
            <h1>We are a global, boutique real <br /> estate brokerage</h1>
            <Grid container spacing={2} className={styles.section_two_item}>
                <Grid item xs={6}>
                    <h2>The transfer of real estate</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet <br />
                        sit pellentesque sollicitudin. Egestas faucibus lacus diam in <br />
                        senectus consectetur. Mattis elit adipiscing quisque tellus <br />
                        scelerisque vehicula ante nunc. Tellus consequat nisl quis <br />
                        nisl justo.</p>
                    <Button className={styles.customButton}>Book Now!</Button>
                    <Button className={styles.customButton1}>Read More</Button>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <h2>12+</h2>
                            <a>Customers</a>
                        </Grid>
                        <Grid item xs={3}>
                            <h2>14+</h2>
                            <a>Offices</a>
                        </Grid>
                        <Grid item xs={3}>
                            <h2>10+</h2>
                            <a>Students</a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <div className={styles.imageContainer}>
                        <Image src="/image6.png" width={600} height={600} alt='section-two-image' className={styles.section_two_image_section} />
                        <div className={styles.overlay}></div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default SectionTwo;
