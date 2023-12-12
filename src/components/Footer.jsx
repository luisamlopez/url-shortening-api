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
const socialMedia = ["Facebook", "Twitter", "Instagram", "Pinterest"];

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "var(--very-dark-violet)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "1rem 5rem",
                gap: "2rem",
            }}
        >
            {/* Logo */}
            <Box
                component="img"
                src={logo}
                sx={{
                    marginRight: "8rem",
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
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                    Follow Us
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'row',  // fixed typo here
                        gap: "0.5rem",
                    }}
                >
                    {socialMedia.map((social, i) => (
                        <Link key={i} href={`https://www.${social.toLowerCase()}.com/`} color="#ffffff">
                            {getSocialMediaIcon(social)}
                        </Link>
                    ))}
                </Box>
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
            gap: "1rem",
            width: "100%",
            textAlign: "left",
        }}
    >
        <Typography sx={{ fontWeight: "bold", color: "white" }}>{title}</Typography>
        {array.map((item, i) => (
            <Typography key={i} sx={{ color: "var(--grayish-violet)" }}>
                {item}
            </Typography>
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
