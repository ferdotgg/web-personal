import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  Zoom,
  Slide,
} from "@material-ui/core";
import { colors } from "../theme/colors.theme";

const Projects = ({ handleChangePage }) => {
  const myProjects = [
    {
      name: "ASADA-SOP",
      description: `Carry out a digital transformation through a web application that facilitates the processes and control of information in an agile and digital way, managing an inventory control, registration of existing and incoming clients.`,
      image: "./assets/images/proyectos/asada.jpg",
      technologies: [
        {
          name: "Laravel",
          badge: "primary",
        },
        {
          name: "MySQL",
          badge: "success",
        },
        {
          name: "Bootstrap",
          badge: "dark",
        },
      ],
    },
    {
      name: "PANGEA LIVING",
      description: `Web system to reserve rooms in a residence made for students in Medellín, Colombia. It provides the facility to reserve the different rooms, without long processes. There is also an administrative system that allows the management of rooms, reservations and customers.`,
      image: "./assets/images/proyectos/pangea.jpg",
      url: "https://pangealivingmde.com/",
      technologies: [
        {
          name: "ReactJS",
          badge: "primary",
        },
        {
          name: "MongoDB",
          badge: "success",
        },
        {
          name: "Ant Design",
          badge: "dark",
        },
      ],
    },
    {
      name: "MEDCARE",
      description: `Website for the management and control of medical appointments. The user can request a medical appointment with a doctor and in a health center. There is an administration system to control it.`,
      image: "./assets/images/proyectos/medcare.jpg",
      url: "https://github.com/ScriptKash/medcare",
      technologies: [
        {
          name: "Laravel",
          badge: "primary",
        },
        {
          name: "MySQL",
          badge: "success",
        },
        {
          name: "Bootstrap",
          badge: "dark",
        },
      ],
    },
    {
      name: "FEDERACIÓN ASADAS ABCT",
      description: `Web platform that allows managing the different ASADAS of the federation. Management and control of the different services, making processes easier in a technological way. This project was carried out with UNA and HIDROCEC`,
      image: "./assets/images/proyectos/federacion.jpg",
      technologies: [
        {
          name: "Laravel",
          badge: "primary",
        },
        {
          name: "MySQL",
          badge: "success",
        },
        {
          name: "Bootstrap",
          badge: "dark",
        },
      ],
    },
  ];

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener");
  };

  useEffect(() => {
    handleChangePage(4);
  }, []); //eslint-disable-line

  return (
    <Box
      bgcolor="#000"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1)40%), url(./assets/images/proyectos/fondo-min.jpg)`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="md">
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Box>
            <Box textAlign="center">
              <img
                src="./assets/images/proyectos/tgg-min.png"
                alt="TorneosGG"
                style={{ width: "100%" }}
              />
            </Box>
            <Card
              style={{
                backgroundColor: colors.blueFernando,
                color: colors.white,
                padding: 10,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              <CardContent>
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  Online tournament platform that provides the best experience
                  to all those players who seek to compete with other players
                  around the world. Winning incredible prizes and every day
                  improving their skills in their favorite game.
                </Typography>
              </CardContent>
              <Box textAlign="right" mb={2} mr={2}>
                <Button
                  onClick={() => openNewTab("https://torneos.gg/")}
                  style={{
                    backgroundColor: colors.blue,
                    fontWeight: 800,
                    color: colors.white,
                    outline: "none",
                    borderRadius: 5,
                  }}
                >
                  See project
                </Button>
              </Box>
            </Card>
            <Box
              style={{
                height: 170,
                background: "url(/assets/images/wave.png)",
                backgroundSize: "cover",
                backgroundColor: colors.blueFernando,
              }}
            />
          </Box>
        </Slide>
        <Grid container spacing={1}>
          {myProjects.map((project) => (
            <Grid item xs={12} md={6}>
              <Zoom timeout={500} in={true} disableStrictModeCompat>
                <Box height="100%">
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      marginBottom: 10,
                      borderRadius: 10,
                    }}
                  />
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      color: colors.white,
                      padding: 10,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" style={{ fontWeight: 700 }}>
                        {project.name}
                      </Typography>
                      <Typography variant="body1">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <Box textAlign="right" mb={2} mr={2}>
                      {project.url && (
                        <Button
                          onClick={() => openNewTab(project.url)}
                          style={{
                            backgroundColor: colors.blue,
                            fontWeight: 800,
                            color: colors.white,
                            outline: "none",
                            borderRadius: 5,
                          }}
                        >
                          See project
                        </Button>
                      )}
                    </Box>
                  </Card>
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
