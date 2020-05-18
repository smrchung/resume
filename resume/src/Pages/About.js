import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Emoji from 'a11y-react-emoji'
import Email from '@material-ui/icons/Email';
import LinkedIn from '../linkedin.png'
import GitHub from '../github.png';
import Skills from './Skills';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: grey[800],
    overflow: 'hidden'
  },
  info: {
    paddingTop: 20,
    float: 'left',
    width: window.innerWidth * .4
  },
  linkColor: {
    color: "#FFFFFF",
    height: 30
  },
  skills: {
    marginLeft: window.innerWidth * .45,
    width: window.innerWidth * .8
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.info}>
          <MuiThemeProvider theme={this.props.theme}>
            <br /><br />
            <Typography color={"primary"} variant="display2" gutterBottom> About Me </Typography>
            <br />
            <Typography color={"primary"} variant="headline" gutterBottom> Location <Emoji symbol="📍" label="location" /> </Typography>

            <Typography color={"primary"} variant="subheading" gutterBottom> Phoenix, AZ </Typography>
            <br />
            <Typography color={"primary"} variant="headline" gutterBottom> School <Emoji symbol="📚" label="school" /> </Typography>
            <Typography color={"primary"} variant="subheading" gutterBottom> Arizona State University </Typography>
            <br />
            <Typography color={"primary"} variant="headline" gutterBottom> Major <Emoji symbol="🎓" label="graduation" /> </Typography>
            <Typography color={"primary"} variant="subheading" gutterBottom>
              Computer Science <br />
            </Typography>
            <br />
            <Typography color={"primary"} variant="headline" gutterBottom> Degrees <Emoji symbol="📃" label="degree" /> </Typography>
            <Typography color={"primary"} variant="subheading" gutterBottom>
              Bachelor of Science (B.S): May 2019 <br />
                Master of Computer Science (MCS): May 2020
              </Typography>
            <br /><br /><br /><br /><br />
            <Typography color={"primary"} variant="display2" gutterBottom> Contact Me </Typography>
            <br /><br />
            <Typography color={"primary"} variant="title" gutterBottom align='center'>
              <a href="mailto:semirakc@gmail.com" className={classes.linkColor}>
                <Email />
              </a>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <a href="https://www.linkedin.com/in/semira-chung/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} className={classes.linkColor} alt="LinkedIn Profile" />
              </a>
                &nbsp; &nbsp; &nbsp;
                <a href="https://github.com/smrchung" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} className={classes.linkColor} alt="GitHub Profile" />
              </a>
            </Typography>
          </MuiThemeProvider>
        </div>
        <div className={classes.skills}>
          <Skills theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);