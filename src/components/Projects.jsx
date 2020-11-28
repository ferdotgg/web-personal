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

import { myProjects } from "../data/projects";

const Projects = ({ handleChangePage }) => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener");
  };

  useEffect(() => {
    handleChangePage(4);
  }, []); //eslint-disable-line

  return (
    <Box
      bgcolor={colors.blackTrue}
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
