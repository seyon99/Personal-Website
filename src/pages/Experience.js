import * as React from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';

// I'm using the following colour palette:
// https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0

const useStyles = makeStyles({
    root: {
        color: "#F72585", 
        fontSize: 100,
    },
});

function Experience(){
    const classes = useStyles();
    return(
        <>
        <h1 className={classes.root}>Work Experience</h1>
        <div>lorum ipsum</div>
        </>
        
    );
}

export default Experience;