import { Box, Button, Typography } from "@mui/material"
import boost from "../assets/bg-boost-desktop.svg"
import boostMobile from "../assets/bg-boost-mobile.svg"

const Boost = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            px: {
                xs: '1rem',
                sm: '1rem',
                lg: '6rem',
            },

            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            py: "4rem",
            background: "var(--dark-violet)",
            backgroundImage: {
                xs: `url(${boostMobile})`,
                sm: `url(${boost})`,
                md: `url(${boost})`,
                lg: `url(${boost})`,

            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "center",
        }}>
            <Typography variant="h2" fontWeight={600} color={"#fff"} my={2} fontSize={{
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3rem",

            }} >
                Boost your links today
            </Typography>

            <Button variant="contained" sx={{
                textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", borderRadius: 5, ":hover": {
                    background: "var(--light-cyan)", boxShadow: 0,
                }
            }}>
                Get Started
            </Button>
        </Box>
    )
}

export default Boost