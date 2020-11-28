import {
  Box,
  createStyles,
  fade,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { skills } from "../data/skills";
import { colors } from "../theme/colors.theme";
import SettingsIcon from "@material-ui/icons/Settings";
import BrushIcon from "@material-ui/icons/Brush";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles((theme) =>
  createStyles({
    divider: {
      height: 170,
      background: "url(/assets/images/wave.png)",
      backgroundSize: "cover",
    },
    devSkills: {
      transition: "all ease .30s",
      cursor: "pointer",
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: fade(colors.blueFernando, 0.4),
      color: colors.blueFernando,
      border: `2px solid ${colors.blueFernando}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        transition: "all ease .30s",
        color: colors.white,
        backgroundColor: colors.blueFernando,
      },
    },
    devSkillsActive: {
      cursor: "pointer",
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: colors.blueFernando,
      color: colors.white,
      border: `2px solid ${colors.blueFernando}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    designSkills: {
      transition: "all ease .30s",
      cursor: "pointer",
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: fade(colors.orange, 0.4),
      color: colors.orange,
      border: `2px solid ${colors.orange}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        transition: "all ease .30s",
        color: colors.white,
        backgroundColor: colors.orange,
      },
    },
    designSkillsActive: {
      cursor: "pointer",
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: colors.orange,
      color: colors.white,
      border: `2px solid ${colors.orange}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    softSkills: {
      transition: "all ease .30s",
      cursor: "pointer",
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: fade(colors.redLight, 0.4),
      color: colors.redLight,
      border: `2px solid ${colors.redLight}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        transition: "all ease .30s",
        color: colors.white,
        backgroundColor: colors.redLight,
      },
    },
    softSkillsActive: {
      cursor: "pointer",
      width: 100,
      height: 100,
      borderRadius: 360,
      backgroundColor: colors.redLight,
      color: colors.white,
      border: `2px solid ${colors.redLight}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    devBox: {
      borderRadius: 10,
      width: "100%",
      textAlign: "center",
      transition: "all ease .30s",
      cursor: "default",
      backgroundColor: fade(colors.blueFernando, 0.4),
      color: colors.blueFernando,
      border: `2px solid ${colors.blueFernando}`,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.blueFernando,
      },
    },
    designBox: {
      borderRadius: 10,
      width: "100%",
      textAlign: "center",
      transition: "all ease .30s",
      cursor: "default",
      backgroundColor: fade(colors.orange, 0.4),
      color: colors.orange,
      border: `2px solid ${colors.orange}`,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.orange,
      },
    },
    softBox: {
      borderRadius: 10,
      width: "100%",
      textAlign: "center",
      transition: "all ease .30s",
      cursor: "default",
      backgroundColor: fade(colors.redLight, 0.4),
      color: colors.redLight,
      border: `2px solid ${colors.redLight}`,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.redLight,
      },
    },
  })
);

const Skills = ({ desktop, handleChangePage }) => {
  const classes = useStyles();
  const [skillActive, setSkillActive] = useState(0);
  const [colorShadow, setColorShadow] = useState(colors.blueFernando);
  const { devSkills, designerSkills, softSkills } = skills;

  const devSorted = devSkills.sort((a, b) => {
    if (a.skill > b.skill) {
      return 1;
    }
    if (a.skill < b.skill) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  useEffect(() => {
    handleChangePage(2);
  }, []); //eslint-disable-line

  const handleChangeSkill = (number) => {
    setSkillActive(number);
  };

  useEffect(() => {
    if (skillActive === 0) {
      setColorShadow(colors.blueFernando);
    }
    if (skillActive === 1) {
      setColorShadow(colors.orange);
    }
    if (skillActive === 2) {
      setColorShadow(colors.redLight);
    }
  }, [skillActive]);

  return (
    <Box height="100%">
      <Box
        className={classes.divider}
        style={{ backgroundColor: colorShadow }}
      />
      <Box p={4}>
        <Grid container alignItems="flex-start" justify="center" spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Box textAlign="center">
              <Typography
                variant="h1"
                style={{
                  fontWeight: 800,
                  textShadow: `4px 4px 0px ${colorShadow}`,
                }}
              >
                Skills
              </Typography>
            </Box>
            <Box display="flex" mt={2} justifyContent="center">
              <Tooltip title="Developer Skills" placement="top" arrow>
                <Box
                  onClick={() => handleChangeSkill(0)}
                  mr={2}
                  className={
                    skillActive === 0
                      ? classes.devSkillsActive
                      : classes.devSkills
                  }
                >
                  <SettingsIcon style={{ fontSize: "3rem" }} />
                </Box>
              </Tooltip>
              <Tooltip title="Designer Skills" placement="top" arrow>
                <Box
                  onClick={() => handleChangeSkill(1)}
                  mr={2}
                  className={
                    skillActive === 1
                      ? classes.designSkillsActive
                      : classes.designSkills
                  }
                >
                  <BrushIcon style={{ fontSize: "3rem" }} />
                </Box>
              </Tooltip>
              <Tooltip title="Soft Skills" placement="top" arrow>
                <Box
                  onClick={() => handleChangeSkill(2)}
                  className={
                    skillActive === 2
                      ? classes.softSkillsActive
                      : classes.softSkills
                  }
                >
                  <SentimentVerySatisfiedIcon style={{ fontSize: "3rem" }} />
                </Box>
              </Tooltip>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            {skillActive === 0 && (
              <Grid container spacing={2}>
                {devSorted.map((dev) => (
                  <Grid key={dev.techologie} item xs={6} sm={4} md={4} lg={2}>
                    <Tooltip title={dev.techologie} arrow placement="top">
                      <Zoom
                        timeout={500}
                        in={true}
                        disableStrictModeCompat
                        className={classes.devBox}
                      >
                        <Box position="relative" height="100%">
                          <Box p={5} textAlign="center">
                            <img
                              src={dev.img}
                              alt={dev.techologie}
                              style={{ width: "100%", minWidth: 30 }}
                            />
                          </Box>
                          <Box
                            style={{
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                            }}
                            position="absolute"
                            width="100%"
                            bottom={0}
                            bgcolor={colors.blueFernando}
                            color="#000572"
                          >
                            <Typography
                              variant="body2"
                              style={{ fontWeight: 700 }}
                            >
                              {dev.skill}
                            </Typography>
                          </Box>
                        </Box>
                      </Zoom>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            )}

            {skillActive === 1 && (
              <Grid container spacing={2}>
                {designerSkills.map((design) => (
                  <Grid
                    key={design.techologie}
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    lg={2}
                  >
                    <Tooltip title={design.techologie} arrow placement="top">
                      <Zoom
                        timeout={500}
                        in={true}
                        disableStrictModeCompat
                        className={classes.designBox}
                      >
                        <Box position="relative" height="100%">
                          <Box p={5} textAlign="center">
                            <img
                              src={design.img}
                              alt={design.techologie}
                              style={{ width: "100%", minWidth: 30 }}
                            />
                          </Box>
                          <Box
                            style={{
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                            }}
                            position="absolute"
                            width="100%"
                            bottom={0}
                            bgcolor={colors.orange}
                            color="#5b4000"
                          >
                            <Typography
                              variant="body2"
                              style={{ fontWeight: 700 }}
                            >
                              {design.skill}
                            </Typography>
                          </Box>
                        </Box>
                      </Zoom>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            )}

            {skillActive === 2 && (
              <Grid container spacing={2}>
                {softSkills.map((soft) => (
                  <Grid key={soft.skill} item xs={12} sm={4} md={4} lg={2}>
                    <Zoom
                      timeout={500}
                      in={true}
                      disableStrictModeCompat
                      className={classes.softBox}
                    >
                      <Box position="relative" height="100%">
                        <Box p={5} textAlign="center">
                          <Typography
                            variant="body2"
                            style={{ fontWeight: 700 }}
                          >
                            {soft.skill}
                          </Typography>
                        </Box>
                      </Box>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
