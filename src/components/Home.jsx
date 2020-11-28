import React, { lazy, Suspense } from "react";
import { Box, Fade, fade, Grid, Typography } from "@material-ui/core";
import { colors } from "../theme/colors.theme";

const ParticlesComponent = lazy(() => import("./Particles"));

const Home = ({ desktop }) => {
  const images = [
    {
      character: "/assets/images/parallax/ryze-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
    {
      character: "/assets/images/parallax/batman-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
    {
      character: "/assets/images/parallax/deadpool-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
    {
      character: "/assets/images/parallax/spider-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
  ];

  const image = images[Math.floor(Math.random() * images.length)];

  const renderLoader = () => "";

  return (
    <>
      {desktop ? (
        <>
          <Suspense fallback={renderLoader()}>
            <ParticlesComponent zIndex={-1} />
          </Suspense>
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={10}
          >
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} md={3}>
                <Suspense fallback={renderLoader()}>
                  <Fade timeout={500} in={true} disableStrictModeCompat>
                    <Box textAlign="center">
                      <img
                        style={{
                          width: 200,
                          height: 200,
                          borderRadius: 360,
                          border: `5px solid ${colors.blueFernando}`,
                          backgroundColor: fade(colors.blueFernando, 0.5),
                        }}
                        src="./assets/images/me-min.png"
                        alt="Fernando Briceño"
                      />
                    </Box>
                  </Fade>
                </Suspense>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box>
                    <Typography variant={desktop ? "h2" : "h6"} component="h1">
                      I'm Fernando,
                    </Typography>
                    <Typography variant={desktop ? "h2" : "h6"} component="h2">
                      Software Engineer
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ color: fade(colors.white, 0.6) }}
                      component="h3"
                    >
                      Front-End Developer
                    </Typography>

                    <Box mb={1}>
                      <Typography
                        component="p"
                        variant="body2"
                        style={{ fontWeight: 600 }}
                      >
                        I'm <span className="about-bold">Fernando Briceño</span>
                        , a Software Engineer from{" "}
                        <span className="about-bold">Costa Rica</span>, who
                        loves and is passionate about technology and video
                        games. Trained to solve problems with different
                        solutions using programming skills.
                      </Typography>
                    </Box>
                    <Typography
                      component="p"
                      variant="body2"
                      style={{ fontWeight: 600 }}
                    >
                      I have experience in{" "}
                      <span className="about-bold">frontend</span> and{" "}
                      <span className="about-bold">backend</span> technologies
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            </Grid>

            <Suspense fallback={renderLoader()}>
              <Box
                height="100%"
                width="100%"
                position="absolute"
                zIndex={-1}
                bgcolor={fade(colors.black, 0.6)}
              />
              <Box
                height="100vh"
                width="100%"
                textAlign="center"
                position="absolute"
                zIndex={-2}
                style={{
                  backgroundImage: `url(./assets/images/parallax/background.jpg)`,
                }}
              />
              <Box
                height="100vh"
                width="100%"
                position="absolute"
                zIndex={-2}
                className="parallax-el"
                style={{
                  backgroundImage: `url(${image.character})`,
                  backgroundSize: "cover",
                }}
              />
            </Suspense>
          </Box>
        </>
      ) : (
        <>
          <Suspense fallback={renderLoader()}>
            <ParticlesComponent zIndex={1} />
          </Suspense>
          <Box
            style={{
              backgroundImage: `url(./assets/images/parallax/background.jpg)`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="94vh"
            p={2}
          >
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} md={3}>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box textAlign="center">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: 150,
                        borderRadius: 360,
                        border: `5px solid ${colors.blueFernando}`,
                        backgroundColor: fade(colors.blueFernando, 0.5),
                      }}
                      src="./assets/images/me-min.png"
                      alt="Fernando Briceño"
                    />
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} md={9}>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box textAlign="center">
                    <Typography
                      variant={desktop ? "h2" : "h5"}
                      style={{ fontWeight: 800 }}
                    >
                      I'm Fernando,
                    </Typography>
                    <Typography
                      variant={desktop ? "h2" : "h5"}
                      style={{ fontWeight: 800 }}
                    >
                      Software Engineer
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ color: fade(colors.white, 0.6) }}
                    >
                      Frontend Developer
                    </Typography>
                  </Box>
                </Fade>

                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box mt={3} marginX={5}>
                    <Box mb={1}>
                      <Typography
                        component="p"
                        variant="body2"
                        style={{ fontWeight: 600 }}
                      >
                        I'm <span className="about-bold">Fernando Briceño</span>
                        , a Software Engineer from{" "}
                        <span className="about-bold">Costa Rica</span>, who
                        loves and is passionate about technology and video
                        games. Trained to solve problems with different
                        solutions using programming skills.
                      </Typography>
                    </Box>
                    <Typography
                      component="p"
                      variant="body2"
                      style={{ fontWeight: 600 }}
                    >
                      I have experience in{" "}
                      <span className="about-bold">frontend</span> and{" "}
                      <span className="about-bold">backend</span> technologies
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
