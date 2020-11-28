import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { colors } from "../theme/colors.theme";
import { Box, Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: colors.black,
    color: colors.white,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: colors.black,
    color: colors.white,
  },
}))(MuiDialogContent);

export default function CustomizedDialogs({ handleClose, selected }) {
  const { name, image, url, index } = selected;

  const openNewTab = () => {
    window.open(url, "_blank", "noopener");
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={true}>
        <DialogTitle onClose={handleClose}>
          <Box display="flex" alignItems="center">
            <img src={image} alt={name} style={{ width: 40 }} />
            <Box ml={1}>{name}</Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <img
            src={`/assets/images/certificados/${index + 1}.png`}
            alt={name}
            width="100%"
            style={{ borderRadius: 10 }}
          />
          <Box mt={2}>
            <Button
              onClick={openNewTab}
              variant="contained"
              color="primary"
              style={{
                backgroundColor: colors.blue,
                fontWeight: 700,
                color: colors.white,
              }}
            >
              See credential
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
