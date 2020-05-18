import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import { grey, purple } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: window.innerHeight, 
    backgroundColor: blueGrey[800],
  },
  info: {
    paddingTop: window.innerHeight / 2 - 100,
  },
  particles: {
    position: 'absolute',
    height: window.innerHeight,
    width: window.innerWidth - 50,
    top: 20,
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: blueGrey[800],
    borderColor: grey[50],
    borderRadius: 25,
    textTransform: 'none',
    fontSize: 15,
    '&:hover': {
      backgroundColor: grey[50],
      color: grey[900]
    },
  },
}))(Button);

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{background: blueGrey}}>
        <div className={classes.info}>
            <Particles className={classes.particles}
              params={{
                  polygon: {
                      enable: false,
                      type: 'inside',
                      move: {
                          radius: 10
                      },
                  },
                  particles: {
                    number: {
                      value: 50
                    },
                    line_linked: {
                      enable: false
                    },
                    size: {
                      value: 3
                    }
                  }
              }} />
          <MuiThemeProvider theme={this.props.theme}>
            <Typography color={"primary"} variant="display2" gutterBottom align='center'> Semira Chung </Typography>
            <Typography color={"primary"} variant="title" gutterBottom align='center'> &#60; incoming software engineer &#47;&#62; </Typography>
            <br/><br/>
            <Typography color={"primary"} variant="title" gutterBottom align='center'> 
              <ColorButton variant="outlined" color="primary" className={classes.margin} href="https://drive.google.com/open?id=1WsR_oAgSxtMV16U_wS1eeeVJqmONvLXF" target="_blank" rel="noopener">
                download résumé
              </ColorButton>
            </Typography>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);