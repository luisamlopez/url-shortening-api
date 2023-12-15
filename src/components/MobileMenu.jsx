import { Button, Dialog, Divider } from "@mui/material"

const MobileMenu = ({ isOpen, closeDialog }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={closeDialog}
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                width: "90%",
                background: "var(--dark-violet)",
                mt: "4rem",
                px: 2,
                mx: "1rem",
                //Overriding the default MUI styles
                //delete backdrop
                ".MuiBackdrop-root": {
                    background: "transparent",
                },

                ".MuiDialog-paper": {
                    background: "var(--dark-violet)",
                    overflow: "hidden",
                    boxShadow: "none",
                },

            }}
        >
            <Button variant="text" sx={{
                boxShadow: "none",
                width: "300px",
                color: "#fff",
                fontSize: "1rem",
                textTransform: "none",
            }}>
                Features
            </Button>
            <Button variant="text" sx={{
                boxShadow: "none",
                width: "300px",
                color: "#fff",
                fontSize: "1rem",
                textTransform: "none",
            }}>
                Pricing
            </Button>
            <Button variant="text" sx={{
                boxShadow: "none",
                width: "300px",
                color: "#fff",
                fontSize: "1rem",
                textTransform: "none",
            }}>
                Resources
            </Button>

            <Divider sx={{
                background: "var(--grayish-violet)",
                height: "1px",
                m: 0,
                p: 0,
                my: 2,

            }} />

            <Button variant="text" sx={{
                boxShadow: "none",
                width: "300px",
                color: "#fff",
                fontSize: "1rem",
                textTransform: "none",
            }}>
                Login
            </Button>
            <Button variant="contained" fullWidth sx={{
                boxShadow: "none",
                width: "300px",
                background: "var( --cyan)",
                borderRadius: 5,
                fontSize: "1rem",
                textTransform: "none",
            }}>
                Sign Up
            </Button>


        </Dialog>
    )
}
export default MobileMenu