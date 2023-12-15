import { Box, Button, Typography } from "@mui/material";
import illustration from "../assets/illustration-working.svg";

const CTAintro = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column-reverse",
                sm: "row",
                lg: "row",
            },
            px: {
                xs: '1rem',
                sm: '1rem',
                lg: '6rem',
            },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mb: {
                xs: "8rem",
                sm: "8rem",
                md: "4.5rem",
                lg: "4.5rem"

            }
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
                <Typography variant="h1" fontWeight={900} sx={{
                    textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left"
                    },
                    fontSize: {
                        xs: "3rem",
                        sm: "3rem",
                        md: "3rem",
                        lg: "6rem"
                    },
                    color: "var(--very-dark-blue)", lineHeight: { sm: "3rem", lg: "5rem" }, letterSpacing: "-0.2rem",

                }}>
                    More than just <br /> shorter links
                </Typography>
                <Typography variant="body1" color={"var(--grayish-violet)"} sx={{
                    textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left"
                    }, fontWeight: 400, fontSize: "1.2rem", lineHeight: "2rem", width: "80%"

                }}>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </Typography>
                <Button variant="contained" sx={{
                    textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", borderRadius: 5, ":hover": {
                        background: "var(--light-cyan)", boxShadow: 0
                    }, width: "150px", fontWeight: 700,
                    fontSize: "1.2rem",
                }}>
                    Get Started
                </Button>
            </Box>

            <Box
                component="img" src={illustration} alt="illustration"
                width={{
                    xs: "350px",
                    md: "450px",
                    lg: "600px",
                }}

                mb={"2rem"}

            />
        </Box >
    )
};


export default CTAintro;