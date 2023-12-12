import { Box, Button, Typography } from "@mui/material";

const CTAintro = () => {
    return (
        <Box>
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
                <Typography variant="h1" fontWeight={600} sx={{
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
                }}>
                    More than just shorter links
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
        </Box>
    )
};


export default CTAintro;