// import React, { useState } from 'react';
// import styles from '../hero/projectSection.module.css';
// import { Grid, Card } from '@mui/material';
// import Image from 'next/image'
// import StarRating from './star';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// const ProjectSection = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const itemsPerPage = 3;

//     const handleNext = () => {
//         if (currentIndex + itemsPerPage < projectData.length) {
//             setCurrentIndex(currentIndex + itemsPerPage);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentIndex - itemsPerPage >= 0) {
//             setCurrentIndex(currentIndex - itemsPerPage);
//         }
//     };
//     return (
//         <div className={styles.project_section}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                     <span>Best Project of the Years</span>
//                     <Grid container spacing={1}>
//                         <Grid item xs={6}>
//                             <h1>Our recent projects</h1>
//                         </Grid>
//                         <Grid item xs={6} className={styles.project_section_nav_icon}>
//                             <NavigateBeforeIcon className={styles.project_section_prev_nav_icon} />
//                             &nbsp; &nbsp;
//                             <NavigateNextIcon className={styles.project_section_next_nav_icon} />
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Grid container spacing={6}>
//                 <Grid item xs={4} className={styles.section_one_item}>
//                     <Card className={styles.projectsCard}>
//                         <Image src="/image3.png" width={447} height={263} alt='section-one-img' className={styles.projects_image_section} />
//                         <h3>Sobha Hearland II Villas</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur. <br />
//                             Adipiscing imperdiet bibendum. </p>
//                         <Grid container spacing={1}>
//                             <Grid item xs={6}>
//                                 <StarRating rating={4.83} />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <a>4.83</a>
//                             </Grid>
//                         </Grid>
//                     </Card>
//                 </Grid>
//                 <Grid item xs={4} className={styles.section_one_item}>
//                     <Card className={styles.projectsCard}>
//                         <Image src="/image4.png" width={447} height={263} alt='section-one-img' className={styles.projects_image_section} />
//                         <h3>Sobha Hearland II Villas</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur. <br />
//                             Adipiscing imperdiet bibendum. </p>
//                         <Grid container spacing={1}>
//                             <Grid item xs={6}>
//                                 <StarRating rating={4.83} />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <a>4.83</a>
//                             </Grid>
//                         </Grid>
//                     </Card>
//                 </Grid>
//                 <Grid item xs={4} className={styles.section_one_item}>
//                     <Card className={styles.projectsCard}>
//                         <Image src="/image5.png" width={447} height={263} alt='section-one-img' className={styles.projects_image_section} />
//                         <h3>Sobha Hearland II Villas</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur. <br />
//                             Adipiscing imperdiet bibendum. </p>
//                         <Grid container spacing={1}>
//                             <Grid item xs={6}>
//                                 <StarRating rating={4.83} />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <a>4.83</a>
//                             </Grid>
//                         </Grid>
//                     </Card>
//                 </Grid>
//                 <Grid item xs={4} className={styles.section_one_item}>
//                     <Card className={styles.projectsCard}>
//                         <Image src="/image3.png" width={447} height={263} alt='section-one-img' className={styles.projects_image_section} />
//                         <h3>Sobha Hearland II Villas</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur. <br />
//                             Adipiscing imperdiet bibendum. </p>
//                         <Grid container spacing={1}>
//                             <Grid item xs={6}>
//                                 <StarRating rating={4.83} />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <a>4.83</a>
//                             </Grid>
//                         </Grid>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// };

// export default ProjectSection;
"use client";
import React, { useState } from "react";
import styles from '../hero/projectSection.module.css';
import { Grid, Card } from '@mui/material';
import Image from 'next/image';
import StarRating from './star';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ProjectSection = () => {
    const projectData = [
        { src: "/image3.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 4.83 },
        { src: "/image4.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 4.13 },
        { src: "/image5.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 3.83 },
        { src: "/image3.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 4.03 },
        { src: "/image4.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 3.13 },
        { src: "/image5.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 2.83 },
        { src: "/image3.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 2.33 },
        { src: "/image4.png", title: "Sobha Heartland II Villas", description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.", rating: 1.83 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < projectData.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className={styles.project_section}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <span>Best Project of the Years</span>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <h1>Our recent projects</h1>
                        </Grid>
                        <Grid item xs={6} className={styles.project_section_nav_icon}>
                            <NavigateBeforeIcon
                                className={styles.project_section_prev_nav_icon}
                                onClick={handlePrevious}
                            />
                            &nbsp; &nbsp;
                            <NavigateNextIcon
                                className={styles.project_section_next_nav_icon}
                                onClick={handleNext}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                {projectData.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
                    <Grid item xs={4} className={styles.section_one_item} key={index}>
                        <Card className={styles.projectsCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.src}
                                    width={447}
                                    height={263}
                                    alt='section-one-img'
                                    className={styles.projects_image_section}
                                />
                                <div className={styles.overlay}></div>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <StarRating rating={project.rating} />
                                </Grid>
                                <Grid item xs={6}>
                                    <a>{project.rating}</a>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProjectSection;
