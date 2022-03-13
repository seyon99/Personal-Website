import * as React from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Ciena", "Interac", "SWE", "SRE"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


    return (
        <>
            <div className={classes.root}>
                <span className={classes.pgTitle}>Work Experience</span>
                <br></br>
                <span>I am typing the following:</span>
                <span ref={el}></span>
            </div>
        </>

    );
}

export default Experience;