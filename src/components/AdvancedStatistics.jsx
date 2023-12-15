import { Box, Typography } from "@mui/material";

const AdvancedStatistics = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            px: {
                xs: '0.5rem',
                sm: '4rem',
                lg: '6rem',
            },

            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            pb: "4rem",
            background: "var(--bone-gray)",
        }}>
            <Typography variant="h2" fontWeight={600} color={"var(--very-dark-violet)"} my={2} >
                Advanced Statistics
            </Typography>

            <Typography>
                Track how your links are performing across the web with our advanced statistics dashboard.
            </Typography>


        </Box>
    )
}

export default AdvancedStatistics;