import { Box, Button, Stack, TextField } from "@mui/material";
import { Form, Formik, useFormikContext } from "formik";
import * as yup from "yup";
import background from "../assets/bg-shorten-desktop.svg";
import backgroundMobile from "../assets/bg-shorten-mobile.svg";
import { useEffect, useState } from "react";
import LinksHolder from "./LinksHolder";

const LinkForm = () => {

    const [links, setLinks] = useState([]);
    //Get links from storagelocal
    useEffect(() => {
        const linksFromStorage = JSON.parse(localStorage.getItem("links"));
        if (linksFromStorage) {
            setLinks(linksFromStorage);
        }
    }, []);



    const initialValues = {
        link: "",
    };

    const schema = yup.object().shape({
        link: yup.string().required("Please add a link").url("Please provide a valid link"),
    });

    const handleSubmit = async (values) => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({ url: values.link }),
                redirect: 'follow',
            };

            const response = await fetch("https://luisamlopez-url-shortener-api.onrender.com", requestOptions);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            console.log(result);
            console.log(result.result_url);

            // Check if the result contains the expected property (result_url)
            if (!result || !result.result_url) {
                throw new Error('Invalid server response format');
            }

            // Push the new link to the links array
            setLinks([...links, { original: values.link, short: result.result_url }]);
            // update the local storage
            localStorage.setItem("links", JSON.stringify([...links, { original: values.link, short: result.result_url }]));

            // Clean the form
            values.link = "";
        } catch (error) {
            console.error('Error:', error.message); // Log the error message
        }
    };


    const MyField = () => {
        // handle the form state using the useFormikContext hook from Formik. This hook gives you access to the Formik context and allows you to directly interact with the form state.
        const { values, errors, handleChange, handleBlur } = useFormikContext();

        return (
            <TextField
                fullWidth
                name="link"
                variant="outlined"
                value={values.link}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.link}
                helperText={errors.link}
                placeholder="Shorten a link here..."
                sx={{
                    height: "55px",
                    borderRadius: "14px",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderRadius: "14px",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "var(--cyan)",
                            borderRadius: "14px",
                        },
                        "&.Mui-error fieldset": {
                            borderColor: "var(--red)",
                        },
                    },
                    "& .MuiFormHelperText-contained": {
                        fontStyle: "italic",
                        fontSize: "1rem",
                        fontWeight: "400",
                        marginLeft: "0px",
                        color: "var(--red)",
                    },
                }}
            />
        );
    };

    return (
        <Box
            sx={{
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
            }}
            backgroundColor="var(--bone-gray)"
        >
            {/* Box to type the link */}
            <Box
                sx={{
                    mt: {
                        xs: "-6rem",
                        sm: "-6rem",
                        md: "-4.5rem",
                        lg: "-4.5rem",
                    },
                    width: "99%",
                    backgroundColor: "var(--dark-violet)",
                    backgroundImage: {
                        xs: `url(${backgroundMobile})`,
                        sm: `url(${backgroundMobile})`,
                        md: `url(${background})`,
                        lg: `url(${background})`,
                    },
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "fill",
                    p: {
                        xs: "2rem",
                        sm: "2rem",
                        md: "2.5rem 4rem",
                        lg: "2.5rem 4rem",
                    },
                    borderRadius: "12px",
                    mb: "2rem",
                }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                >
                    <Stack spacing={4} component={Form} direction={{
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                    }}>
                        <MyField />
                        <Button type="submit" variant="contained" sx={{
                            textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", ":hover": {
                                background: "var(--light-cyan)", boxShadow: 0,
                            },
                            height: "55px",
                            width: {
                                xs: "100%",
                                sm: "250px",
                            },
                            fontSize: "1.2rem",
                            borderRadius: "12px",
                            fontWeight: "700",
                        }}>
                            Shorten It!
                        </Button>
                    </Stack>
                </Formik>
            </Box>

            {/* Box to display the shortened link if there are any*/}
            <LinksHolder links={links} />

            <Box />
        </Box>
    );
};

export default LinkForm;
