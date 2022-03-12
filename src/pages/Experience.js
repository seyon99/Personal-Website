import * as React from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';

// I'm using the following colour palette:
// https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fdfcdc",
        width: "100wh",
        height: "100vh",
    },
    pgTitle: {
        color: "#0081a7",
        fontSize: 100,
        fontWeight: 'bold',
        paddingLeft: 15,
    }
});

function Experience() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <span className={classes.pgTitle}>Work Experience</span>
            </div>
        </>

    );
}

export default Experience;