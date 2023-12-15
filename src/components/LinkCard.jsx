import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkCard = ({ original, short }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    };
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

                <CopyToClipboard text={short} onCopy={handleCopy}>
                    <Button variant="contained" sx={{
                        textTransform: "none", margin: 0, boxShadow: 0, background: isCopied ? "var(--very-dark-violet)" : "var(--cyan)", ":hover": {
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
                        {isCopied ? "Copied!" : "Copy"}
                    </Button>
                </CopyToClipboard>
            </Box>
        </Box>
    )


}

export default LinkCard;