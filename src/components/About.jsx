import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { colors } from "../theme/colors.theme";

const About = () => {
  const { white } = colors;

  return (
    <Box component="section" p={3} bgcolor="#000a4e" color={white}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6} lg={6}>
          <Box textAlign="center">
            <Typography variant="h2" style={{ fontWeight: 900, color: white }}>
              Who I am?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box mb={1}>
            <Typography component="p" variant="h5" style={{ fontWeight: 600 }}>
              I'm <span className="about-bold">Fernando Briceño</span>, a
              Software Engineer from{" "}
              <span className="about-bold">Costa Rica</span>, who loves and is
              passionate about technology and video games. Trained to solve
              problems with different solutions using programming skills.
            </Typography>
          </Box>
          <Typography component="p" variant="h5" style={{ fontWeight: 600 }}>
            I have experience in <span className="about-bold">frontend</span>{" "}
            and <span className="about-bold">backend</span> technologies
          </Typography>
        </Grid>
      </Grid>
      <Box height={130} />
    </Box>
  );
};

export default About;
