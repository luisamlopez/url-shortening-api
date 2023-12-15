import { Box, Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const LinkForm = () => {
    const initialValues = {
        link: "",
    };
    const schema = yup.object().shape({
        link: yup.string().url().required("Please add a link."),
    });
    const handleSubmit = (value, action) => {

        action.setSubmitting(true);
    };

    return (
        <Box
            sx={{
                width: "100%",
                p: "1rem",
            }}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ errors, values }) => (
                    <Stack spacing={2} component={Form} direction={"row"}>
                        <Field
                            component={TextField}
                            fullWidth
                            //required
                            name="link"
                            variant="outlined"
                            value={values.link}
                            error={errors.link}
                            helperText={errors.link ? errors.link : null}
                            placeholder="Shorten a link here..."
                            sx={{
                                height: "60px",
                            }}

                        />
                        <Button type="submit" variant="contained" sx={{
                            textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", ":hover": {
                                background: "var(--light-cyan)", boxShadow: 0,
                            },
                            height: "60px",
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

                )}
            </Formik>


        </Box>
    )
}

export default LinkForm;
