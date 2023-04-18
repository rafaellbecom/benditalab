// import React from "react";
// import { makeStyles } from "@mui/material/styles";
// import { Grid, Paper, IconButton } from "@mui/material";
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import { Theme } from "@mui/material";

// SwiperCore.use([Navigation, Pagination]);

// export interface GalleryProps {
//     images: string[];
// }

// const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//     },
//     thumbnail: {
//       height: 80,
//       width: 80,
//       objectFit: "cover",
//       margin: "0 8px",
//       borderRadius: 4,
//       cursor: "pointer",
//       border: "2px solid transparent",
//       "&:hover": {
//         border: `2px solid ${theme.palette.primary.main}`,
//       },
//     },
//   }));


// export function ProductGallery (props:GalleryProps){
//     const classes = useStyles();
//     const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);
//     const [activeIndex, setActiveIndex] = React.useState(0);
  
//     const handleThumbnailClick = (index: number) => {
//       setActiveIndex(index);
//       swiper?.slideTo(index);
//     };
//     return (
//         <div className={classes.root}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={8}>
//           <Paper className={classes.paper}>
//             <Swiper
//               onSwiper={(swiper) => setSwiper(swiper)}
//               onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//               navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
//               pagination={{ clickable: true }}
//               slidesPerView={1}
//             >
//               {props.images.map((image) => (
//                 <SwiperSlide key={image}>
//                   <img src={image} alt="product image" style={{ maxWidth: "100%" }} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <IconButton className="swiper-button-prev">
//               <ChevronLeftIcon />
//             </IconButton>
//             <IconButton className="swiper-button-next">
//               <ChevronRightIcon />
//             </IconButton>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Grid container spacing={2}>
//             {props.images.map((image, index) => (
//               <Grid item xs={4} key={image}>
//                 <img
//                   src={image}
//                   alt={`product image ${index}`}
//                   className={`${classes.thumbnail} ${activeIndex === index ? "active" : ""}`}
//                   onClick={() => handleThumbnailClick(index)}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//     )
// }