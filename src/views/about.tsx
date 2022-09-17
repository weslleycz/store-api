import Container from "@mui/material/Container";
import React from "react";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";

export interface Props {
    title: string;
}

const About = ({ title }: Props) => {
    return (
        <>
            <Head title={title}></Head>
            <Container maxWidth="sm"></Container>
            <Footer></Footer>
        </>
    );
};

export default About;
