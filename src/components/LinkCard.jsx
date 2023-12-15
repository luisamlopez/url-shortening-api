import { Box, Button, Typography } from "@mui/material";

const LinkCard = ({ original, short }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                    lg: "row"
                },
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "12px",
                backgroundColor: "#fff",
                width: "100%",
            }}
        >
            <Typography
                sx={{
                    color: "var(--dark-violet)",
                    fontWeight: 600,
                    width: {
                        xs: "100%",
                        sm: "60%",
                        lg: "60%"
                    },
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    p: "1rem 0 1rem 1rem",
                }}
            >{original}

            </Typography>
            {/* If mobile add a divider */}
            <Box sx={{
                display: {
                    xs: "block",
                    sm: "none",
                    lg: "none"
                },
                width: "100%",
                height: "1px",
                backgroundColor: "var(--gray)",
            }}></Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                        lg: "row"
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: {
                        xs: "100%",
                        sm: "40%",
                        lg: "40%"
                    },
                    placeSelf: "flex-end",
                    p: "1rem",
                    gap: "1rem",
                    textAlign: "left"
                }}
            >

                <Typography
                    sx={{
                        color: "var(--cyan)",
                        fontWeight: 500,
                        textAlign: "left",
                        width: "100%",
                    }}
                >
                    {short}
                </Typography>

                <Button variant="contained" sx={{
                    textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", ":hover": {
                        background: "var(--light-cyan)", boxShadow: 0,
                    },
                    width: {
                        xs: "100%",
                        sm: "250px",
                    },
                    fontSize: "1.2rem",
                    borderRadius: "10px",
                    fontWeight: "700",
                }}>
                    Copy
                </Button>
            </Box>
        </Box>
    )


}

export default LinkCard;