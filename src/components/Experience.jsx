import React, { useEffect, useState } from "react";
import { Box, Grid, Slide } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";

import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Typography from "@material-ui/core/Typography";
import { colors } from "../theme/colors.theme";
import { experiences } from "../data/experiences";

const Experience = ({ desktop, handleChangePage }) => {
  const [selected, setSelected] = useState(0);

  const [image, setImage] = useState("");

  useEffect(() => {
    handleChangePage(1);
  }, []); //eslint-disable-line

  const handleSelect = (image, index) => {
    setImage(image);
    setSelected(index);
  };

  return (
    <>
      <Box
        width="100%"
        height="100vh"
        textAlign="center"
        position="absolute"
        className="parallax-el"
        style={{
          backgroundImage: `url(./assets/images/parallax/figures.png)`,
          backgroundSize: "contain",
          opacity: 0.7,
        }}
      />
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Box
          mt={desktop ? 0 : 10}
          height={desktop ? "100vh" : "100%"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    style={{
                      fontWeight: 800,
                      textShadow: "4px 4px 0px #0009be",
                    }}
                  >
                    My
                  </Typography>
                  <Typography
                    variant="h2"
                    style={{
                      fontWeight: 800,
                      textShadow: "4px 4px 0px #0009be",
                    }}
                  >
                    Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box height="100%">
                <Timeline align="alternate">
                  {experiences.map((exp, index) => (
                    <TimelineItem
                      onMouseEnter={() => handleSelect(exp.image, index)}
                      onMouseLeave={() => handleSelect("")}
                    >
                      <TimelineOppositeContent>
                        <Typography
                          style={{ fontWeight: 700, color: colors.orange }}
                        >
                          {exp.time}
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography style={{ fontWeight: 800 }}>
                          {exp.title}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box p={3} height="100%">
                {image !== "" ? (
                  <>
                    <Typography variant="body1">
                      {experiences[selected].description}
                    </Typography>
                    <Box mt={2} textAlign="right">
                      <img src={image} style={{ width: 130 }} alt="Logo" />
                    </Box>
                  </>
                ) : (
                  <Typography variant="h6">
                    {desktop
                      ? "Put your mouse hover in a timeline to see a experience description"
                      : "Tap in a timeline to see a experience description"}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Slide>
    </>
  );
};

export default Experience;
