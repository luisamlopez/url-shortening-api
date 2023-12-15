import { Card, CardContent, Typography } from "@mui/material";

const Statistic = ({ title, content, type }) => {
    return (

        <Card sx={{
            width: {
                xs: "100%",
                sm: "100%",
                md: "360px",
            },
            height: "260px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#fff",
            boxShadow: "none",
            textAlign: {
                xs: "center",
                sm: "left",
            },
        }}>

            <CardContent>
                <Typography
                    sx={{
                        mt: "3rem",
                        color: "var(--dark-violet)",
                        fontWeight: "bold",
                        mb: "1rem",
                    }}
                >
                    {title}
                </Typography>
                <Typography>
                    {content}
                </Typography>
            </CardContent>
        </Card >

    )
}

export default Statistic;