import React from "react";
import styles from '../hero/sectionOne.module.css';
import { Grid } from '@mui/material';
import Image from 'next/image'

const SectionOne = () => {
    return (
        <div className={styles.section_one}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <span>Three steps. Three minutes.</span>
                    <h1>Everything should be this easy.</h1>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={12} xl={4} lg={4} className={styles.section_one_item}>
                    <Image src="/messages.png" width={50} height={50} alt='section-one-img' className={styles.section_one_image_section} />
                    <h3>Answer questions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. <br />
                        Adipiscing imperdiet bibendum in in <br />
                        vestibulum. </p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={4} lg={4} className={styles.section_one_item}>
                    <Image src="/sms-tracking.png" width={50} height={50} alt='section-one-img' className={styles.section_one_image_section} />
                    <h3>Select a quote</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. <br />
                        Adipiscing imperdiet bibendum in in <br />
                        vestibulum. </p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={4} lg={4} className={styles.section_one_item}>
                    <Image src="/edit-2.png" width={50} height={50} alt='section-one-img' className={styles.section_one_image_section} />
                    <h3>Get registered</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. <br />
                        Adipiscing imperdiet bibendum in in <br />
                        vestibulum. </p>
                </Grid>
            </Grid>
        </div>
    )
};

export default SectionOne;
