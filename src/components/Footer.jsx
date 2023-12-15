import { Box, Link, Typography } from "@mui/material";
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
    return (
        <Box sx={{
            background: "var(--very-dark-violet)",
            py: "2rem",
            px: {
                xs: '1rem',
                sm: '1rem',
                md: '4rem',
                lg: '6rem',
            },
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
            },
            alignItems: {
                xs: "center",
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-start",
            },
            gap: "2rem",
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
                sm: "left",
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
