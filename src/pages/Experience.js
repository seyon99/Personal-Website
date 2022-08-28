import React, { useEffect, useState, } from "react";
import { Grid } from '@material-ui/core/';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom';
import PreviewIcon from '@mui/icons-material/Preview';
import './Experience.css';
import ProjectCard from "../components/ProjectCard";

// I'm using the following colour palette:
// https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0

const useStyles = makeStyles({
    root: {
        width: "100wh",
        height: "100vh",
        paddingLeft: 50,
    },
    pgTitle: {
        color: "#fff",
        display: "inline-block",
        fontSize: 70,
        fontWeight: 'bold',
        paddingBottom: 30,
    },
    projects: {
        paddingBottom: 30,
    }
});

const projects = [
    {
        projName: "Pintos",
        desc: "An instructional operating system framework for the x86 instruction set architecture, built using C, Perl, and x86 Assembly.",
        link: "https://github.com/seyon99/Pintos",
        img: "https://d3i71xaburhd42.cloudfront.net/2820852db5c20f5fbedfce43458259389db7149a/3-Figure2-1.png"
    },
    {
        projName: "SMS Maps",
        desc: "SMS application which allows users to get directions without an internet connection, built using Python, Django, PostgreSQL, and the Google Cloud Platform.",
        link: "https://github.com/seyon99/SMS-Maps",
        img: "https://www.j2store.org/images/extensions/apps/apps_preview_image/twilio-sms_preview.png"
    },
    {
        projName: "Ridesharing RESt API",
        desc: "A REST API for an Uber-like ride sharing application which utilizes microservices supported by MongoDB, Neo4j, and PostgreSQL.",
        link: "https://github.com/seyon99/RideSharingAPI",
        img: "https://i.stack.imgur.com/skSJ8.png"
    },
    {
        projName: "LaTeX Resume Generator",
        desc: "Dockerized web application to generate LaTeX resumes for software engineers using plain text inputs, built using Java + Spring Boot.",
        link: "https://github.com/seyon99/LaTeX-Resume-Generator",
        img: "https://writelatex.s3.amazonaws.com/published_ver/19515.jpeg?X-Amz-Expires=14400&X-Amz-Date=20220828T181952Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20220828/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=1f0f812fdc6d55f88bba7ab6a479dcf89ef86c55b4d5d1b2befdb741a42f3217"
    },
    {
        projName: "Tradeverse",
        desc: "A web application to trade items in your local community, built using MongoDB, Express, React, Node, and Google Cloud Platform.",
        link: "https://github.com/seyon99/Tradeverse",
        img: "https://github.com/seyon99/Tradeverse/raw/main/demo-picture.png"
    },
    {
        projName: "AI Caption Generator",
        desc: "REST API to generate image captions using a convolutional neural network, built primarily using Kotlin + Spring Boot, Python, and AWS S3 & Lambda",
        link: "https://github.com/seyon99/AI-Caption-Generator",
        img: "https://miro.medium.com/max/1400/1*uAeANQIOQPqWZnnuH-VEyw.jpeg"
    }

];

function Experience() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <span className={classes.pgTitle}>Projects</span>
                <div className={classes.projects}>
                    <Grid
                        container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {projects.map(proj => (
                            <Grid item style={{ display: 'flex' }} xs="auto" sm={4} md={4}
                                className={classes.btmGrid} key={projects.indexOf(proj)}>
                                <ProjectCard proj={proj} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            <div style={{ color: "white", fontSize: 15, textAlign: "center", bottom: 0 }}>
                Seyon Kuganesan 2022 | Built with ❤️
            </div>
        </>

    );
}

export default Experience;