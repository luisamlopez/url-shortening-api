import { Box, Button, Typography } from "@mui/material";
import illustration from "../assets/illustration-working.svg";

const CTAintro = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
                lg: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",

                },
                gap: 2,
            }}>
                <Typography variant="h1" fontWeight={700} sx={{
                    textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left"
                    },
                    fontSize: {
                        xs: "2rem",
                        sm: "2rem",
                        md: "3rem",
                        lg: "4rem"
                    },
                    color: "var(--very-dark-violet)"
                }}>
                    More than just <br /> shorter links
                </Typography>
                <Typography variant="body1" color={"var(--grayish-violet)"} sx={{
                    textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left"
                    }
                }}>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </Typography>
                <Button variant="contained" sx={{
                    textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", borderRadius: 5, ":hover": {
                        background: "var(--light-cyan)", boxShadow: 0
                    }
                }}>
                    Get Started
                </Button>
            </Box>

            <Box
                component="img" src={illustration}
                height={{
                    xs: "auto",
                    sm: "auto",
                    md: "auto",
                    lg: "auto",


                }}
                width={{
                    xs: "350px",
                    sm: "350px",
                    md: "350px",
                    lg: "500px",
                }}

            /* Cut the image -10rem on the right  and hide the rest*/
            />
        </Box >
    )
};


export default CTAintro;