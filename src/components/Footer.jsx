import { Box, Container, Link, Typography, useTheme } from "@mui/material";
import logo from "../assets/footer-logo.svg";
import {
    FacebookRounded,
    Instagram,
    Pinterest,
    Twitter,
} from "@mui/icons-material";

// Features array
const features = ["Link Shortening", "Branded Links", "Analytics"];
// Resources array
const resources = ["Blog", "Developers", "Support"];
// Company array
const company = ["About", "Our Team", "Careers", "Contact"];
// Social Media array
const socialMedia = ["Facebook", "Twitter", "Pinterest", "Instagram"];

const Footer = () => {
    const theme = useTheme(); // Access the theme for responsive styling
    return (
        <Box
            component="footer"
            sx={{
                bottom: 0,
                left: 0,
                width: "100%",
                background: "var(--very-dark-violet)",
                [theme.breakpoints.down('sm')]: {
                    position: "relative",
                },
            }}
        >
            <Container sx={{
                background: "var(--very-dark-violet)",
                padding: "2rem 0",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                },
                alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                },
                gap: "2rem",
                width: "100%",
            }}>
                {/* Logo */}
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        marginRight: {
                            xs: "0",
                            sm: "0",
                            md: "4rem",
                            lg: "14rem",
                        },
                    }}
                />
                {/* Features */}
                <FooterMenu array={features} title={"Features"} />
                {/* Resources */}
                <FooterMenu array={resources} title={"Resources"} />
                {/* Company */}
                <FooterMenu array={company} title={"Company"} />
                {/* Social Media */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'row',
                        gap: "0.5rem",
                    }}
                >
                    {socialMedia.map((social, i) => (
                        <Link key={i} href={`https://www.${social.toLowerCase()}.com/`} color="#ffffff" sx={{
                            ":hover": {
                                color: "var(--cyan)",
                            },
                        }}>
                            {getSocialMediaIcon(social)}
                        </Link>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

// Component for the footer menu
const FooterMenu = ({ title, array }) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "100%",
            textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
            },
        }}
    >
        <Typography sx={{ fontWeight: "bold", color: "white" }}>{title}</Typography>
        {array.map((item, i) => (
            <Link href={"#"} key={i} sx={{
                color: "var(--grayish-violet)", textDecoration: "none",
                ":hover": {
                    color: "var(--cyan)",
                },
            }}>
                {item}
            </Link>
        ))}
    </Box>
);

const getSocialMediaIcon = (social) => {
    switch (social) {
        case "Facebook":
            return <FacebookRounded />;
        case "Twitter":
            return <Twitter />;
        case "Instagram":
            return <Instagram />;
        case "Pinterest":
            return <Pinterest />;
        default:
            return null;
    }
};

export default Footer;
