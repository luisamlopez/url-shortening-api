import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import Statistic from "./Statistic";
import brand from "../assets/icon-brand-recognition.svg";
import detailed from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";

const content = [
    {
        title: "Brand Recognition",
        content: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
        type: "brand"
    }, {
        title: "Detailed Records",
        content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        type: "detailed"
    }, {
        title: "Fully Customizable",
        content: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        type: "fully"
    }
]

const AdvancedStatistics = () => {
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
            pb: "4rem",
            background: "var(--bone-gray)",
            textAlign: "center",
        }}>
            <Typography variant="h2" fontWeight={600} color={"var(--very-dark-blue)"} my={2} >
                Advanced Statistics
            </Typography>

            <Typography lineHeight={"1.8rem"} mb={"4rem"}>
                Track how your links are performing across the web with our advanced statistics dashboard.
            </Typography>

            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: "4rem",
            }}>

                {content.map((item, index) => (
                    <Box key={index} sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                            md: "row",
                        },
                        alignItems: "center",
                        width: "100%",
                        top: {
                            xs: "0",
                            md: item.type === "brand" ? "-4rem" : item.type === "detailed" ? "-2rem" : "0",
                        }
                    }}>

                        {/* Icon holder */}
                        <Box sx={{
                            position: "absolute",
                            top: "-2rem",
                            left: {
                                xs: "calc(50% +50px)",
                                lg: "6%",
                            },
                            borderRadius: "60px",
                            background: "var(--very-dark-blue)",
                            width: 80,
                            height: 80,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >
                            {/* Icon */}
                            <Box component={"img"}
                                alt={item.title}
                                src={item.type === "brand" ? brand : item.type === "detailed" ? detailed : fully}
                                sx={{ width: 40, height: 40, }} />
                        </Box>
                        <Statistic key={index} title={item.title} content={item.content} type={item.type} />

                        {/* Connection line */}
                        <Box sx={{
                            display: item.type === "fully" ? "none" : "block",
                            backgroundColor: "var(--cyan)",
                            width: {
                                xs: "0.5rem",
                                md: "6rem",
                            },
                            height: {
                                xs: "8rem",
                                md: "0.5rem"
                            },
                            top: {
                                xs: "calc(50% + 4rem)",
                                md: "calc(50% - 0.5rem)",
                            },
                        }} />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default AdvancedStatistics;