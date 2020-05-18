import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Particles from 'react-particles-js';

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
  linkColor: {
    color: "#FFFFFF",
    height: 25
  },
  particles: {
    position: 'absolute',
    height: window.innerHeight,
    width: window.innerWidth - 50,
    top: 20,
  }
});

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