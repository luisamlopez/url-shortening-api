import { Box } from "@mui/material";
import LinkCard from "./LinkCard";

const LinksHolder = ({ links }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                mb: {
                    xs: "8rem",
                    sm: "8rem",
                    md: "4.5rem",
                    lg: "4.5rem"

                },
                gap: "1rem"
            }}
        >


            {links.length > 0 ?
                <>   {
                    links.map((link, i) => {
                        return (
                            <LinkCard key={i} original={link.original} short={link.short} />
                        )
                    })
                }</>
                : <></>
            }


        </Box>
    )
}

export default LinksHolder;