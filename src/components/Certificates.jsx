import {
  Box,
  Button,
  CircularProgress,
  createStyles,
  fade,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { myCertificates, principalCertificates } from "../data/certificates";
import { colors } from "../theme/colors.theme";

const useStyles = makeStyles((theme) =>
  createStyles({
    divider: {
      height: 170,
      background: "url(/assets/images/wave.png)",
      backgroundSize: "cover",
    },
    certificate: {
      marginBottom: 5,
      borderRadius: 360,
      padding: 5,
      transition: "all ease .30s",
      cursor: "pointer",
      color: colors.blueFernando,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        transition: "all ease .30s",
        color: colors.white,
        backgroundColor: colors.black,
      },
    },
    certificateActive: {
      borderRadius: 360,
      padding: 5,
      cursor: "pointer",
      backgroundColor: fade(colors.blueFernando, 0.6),
      color: colors.white,
      border: `2px solid ${colors.blueFernando}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      marginBottom: 20,
      "&::before": {
        content: '""',
        position: "absolute",
        width: 64,
        height: 4,
        background: colors.blueFernando,
        top: -10,
      },
    },
  })
);

const Certificates = ({ desktop, handleChangePage }) => {
  const classes = useStyles();

  const [certificateActive, setCertificateActive] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [loading]);

  useEffect(() => {
    handleChangePage(3);
  }, []); //eslint-disable-line

  const handleChangeCertificate = (number) => {
    setLoading(true);
    setCertificateActive(number);
  };

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener");
  };

  const certificateObject = myCertificates[certificateActive];

  return (
    <>
      <Box
        className={classes.divider}
        style={{ backgroundColor: colors.black }}
      />
      <Box mx={4} mb={4}>
        <Box mb={4}>
          <Box position="relative">
            <Box className={classes.title}>
              <Typography
                variant={desktop ? "h3" : "h4"}
                style={{
                  fontWeight: 800,
                  // textShadow: `4px 4px 0px ${colorShadow}`,
                }}
              >
                Main certificates
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={1}>
            {principalCertificates.map((principal) => (
              <Grid key={principal.name} item xs={12} md={6} lg={3}>
                <Zoom timeout={500} in={true}>
                <Box height="100%">
                  <Tooltip arrow placement="bottom" title={principal.name}>
                  <img
                    src={principal.image}
                    alt={principal.name}
                    style={{ width: "100%", borderRadius: 10 }}
                  />
                  </Tooltip>
                </Box>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container alignItems="flex-start" spacing={1}>
          <Grid item xs={12} md={7} lg={7}>
            <Box position="relative">
              <Box className={classes.title}>
                <Typography
                  variant={desktop ? "h3" : "h4"}
                  style={{
                    fontWeight: 800,
                    // textShadow: `4px 4px 0px ${colorShadow}`,
                  }}
                >
                  Other certificates
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={1}>
              {myCertificates.map((certificate, index) => (
                <Grid key={certificate.name} item xs={4} md={2} lg={2}>
                  <Tooltip title={certificate.name} arrow placement="top">
                    <Zoom
                      timeout={500}
                      in={true}
                      disableStrictModeCompat
                      className={
                        certificateActive === index
                          ? classes.certificateActive
                          : classes.certificate
                      }
                    >
                      <Box
                        onClick={() => handleChangeCertificate(index)}
                        height="100%"
                        textAlign="center"
                      >
                        <img
                          src={certificate.image}
                          alt="Certificado"
                          style={{ maxWidth: 70, minWidth: 40 }}
                        />
                      </Box>
                    </Zoom>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Box mb={2}>
              <Zoom timeout={500} in={true}>
                <Typography variant="h5" style={{ fontWeight: 700 }}>
                  {certificateObject.name}
                </Typography>
              </Zoom>
            </Box>
            {loading ? (
              <Box
                height={400}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress
                  size={100}
                  style={{ color: colors.blueFernando }}
                />
              </Box>
            ) : (
              <Zoom timeout={500} in={true}>
                <img
                  src={`/assets/images/certificados/${
                    certificateActive + 1
                  }-min.png`}
                  alt={certificateObject.name}
                  style={{ width: "100%", borderRadius: 15 }}
                />
              </Zoom>
            )}
            <Box mt={2}>
              {!loading && (
                <Zoom timeout={500} in={true} disableStrictModeCompat>
                  <Button
                    onClick={() => openNewTab(certificateObject.url)}
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: colors.blueFernando,
                      fontWeight: 700,
                      color: colors.white,
                      outline: "none",
                      borderRadius: 20,
                    }}
                  >
                    See credential
                  </Button>
                </Zoom>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Certificates;
