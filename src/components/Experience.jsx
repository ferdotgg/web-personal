import React, { useEffect, useState } from "react";
import { Box, Grid, Slide } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";

import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import HomeIcon from "@material-ui/icons/Home";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

import OpacityIcon from "@material-ui/icons/Opacity";
import Typography from "@material-ui/core/Typography";
import { colors } from "../theme/colors.theme";

const Experience = ({ desktop, handleChangePage }) => {
  const [selected, setSelected] = useState(0);

  const [image, setImage] = useState("");

  useEffect(() => {
    handleChangePage(1);
  }, []); //eslint-disable-line

  const experiences = [
    {
      time: "2018 - Present",
      title: "Co-Founder & CTO @ Torneos.GG",
      description: `In charge of the technology area. I am also the frontend lead.`,
      image: "./assets/images/tgg.png",
      icon: <EmojiEventsIcon />,
      color: "secondary",
    },
    {
      time: "2019 - 2020 | 17 months",
      title: "ASADA-SOP (University Project)",
      description: `Using digital transformation, a web platform was created to manage the different processes of an ASADA (Associations of the Communal Aqueduct and Sewer Systems).`,
      image: "./assets/images/asadasop.png",
      icon: <OpacityIcon />,
      color: "primary",
      variant: "outlined",
    },
    {
      time: "2020 | 4 months",
      title: "Full Stack Developer @ PANGEA LIVING",
      description: `I made some systems related to the reservation of rooms and also in the administrative system (control of rooms, reservations, etc). I worked as a Full Stack.`,
      image: "./assets/images/pangea.png",
      icon: <HomeIcon />,
      color: "secondary",
      variant: "outlined",
    },
    {
      time: "2020 | 11 months",
      title: "Full Stack Developer @ UNA",
      description: `Assistant student for the realization of a platform for the management and control of ASADAS, a project carried out with HIDROCEC-UNA.`,
      image: "./assets/images/una.png",
      icon: <HomeIcon />,
      color: "secondary",
      variant: "outlined",
    },
    {
      time: "2020 - Present",
      title: "Frontend Developer @ Gamanza",
      description: `Realization of different UI components and views for information management in a CRM system.`,
      image: "./assets/images/gamanza.png",
      icon: <VideogameAssetIcon />,
      color: "primary",
    },
  ];

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
