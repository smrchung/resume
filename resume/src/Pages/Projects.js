import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: grey[800],
  },
  techTexts: {
    display: "inline-flex"
  },
  techText: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    align: "center",
    backgroundColor: "#E7E7E7",
    borderRadius: 25,
    fontSize: 12
  },
  button: {
    fontFamily: "Muli",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 1,
    paddingBottom: 1,
  },
  disclaimerText: {
    fontSize: 14,
  },
  entities: {
    width: window.innerWidth * .8
  }
});

class Projects extends React.Component {
  state = {
    value: 0,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <br /><br /><br />
        <MuiThemeProvider theme={this.props.theme}>
          <Typography color={"primary"} variant="display2" gutterBottom> Projects </Typography>
        </MuiThemeProvider>
        <div className={classes.entities}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February - April 2020"
            iconStyle={{ background: 'rgb(245, 147, 0)', color: '#fff' }}
            icon={<CodeIcon />}
          >
            <div className={classes.techTexts} role="button">
              <Typography variant="subheading" className={classes.techText}> Thymeleaf </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Spring </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Hibernate </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> MySQL </Typography>
            </div>
            <h3 className="vertical-timeline-element-title">Sparky's Bank: Secure Banking System</h3>
            <h4 className="vertical-timeline-element-subtitle">CSE 545 - Software Security</h4>
            <p>
              A full-stack application that allows customers and merchants to create accounts and perform functionalities such as transfer funds via email/account number, request for new accounts, modify profile information, set up appointments with specialists, and more. There are several roles whose pages are only restricted
              to these roles (admins, tier 1, and tier 2 employees). Security designs were implemented such as SSL/TSL (HTTPs), PKI, OTP, and salted/hashed passwords in the encrypted form.
            </p>
            <br />
            <div>
              <Button variant="outlined" className={classes.button} href="https://github.com/dayakulkarniasu/CSE545_Team7" target="_blank" rel="noopener">
                repo
              </Button>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October - November 2019"
            iconStyle={{ background: 'rgb(245, 147, 0)', color: '#fff' }}
            icon={<CodeIcon />}
          >
            <div className={classes.techTexts} role="button">
              <Typography variant="subheading" className={classes.techText}> Tensorflow </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Android Studio </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Java </Typography>
            </div>
            <h3 className="vertical-timeline-element-title">EyeDentify: Assistive Object Detection Application</h3>
            <h4 className="vertical-timeline-element-subtitle">CSE 569 - Fundamentals of Statistical Learning</h4>
            <p>
              An assistive mobile application that uses object detection to allow the visually impaired detect three main objects in their daily lives (humans, cars, chairs) using their mobile application camera in order to navigate through daily tasks with ease.
              The application notifies user of the relative position and estimated distance from the camera to the object as well as has audio capability.
            </p>
            <br />
            <div>
              <Button variant="outlined" className={classes.button} href="https://github.com/smrchung/CSE569-Project" target="_blank">
                repo
              </Button>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January - April 2019"
            iconStyle={{ background: 'rgb(245, 147, 0)', color: '#fff' }}
            icon={<CodeIcon />}
          >
            <div className={classes.techTexts} role="button">
              <Typography variant="subheading" className={classes.techText}> React.js </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> d3.js </Typography>
            </div>
            <h3 className="vertical-timeline-element-title">Amazon Product Review Data Visualizations</h3>
            <h4 className="vertical-timeline-element-subtitle">CSE 578 - Data Visualization</h4>
            <p>
              Analyzed an Amazon Electronics Product Reviews data-set to create four different visualizations that helps convey the story of picturing customers' buying decisions.
            </p>
            <br />
            <div>
              <Button variant="outlined" className={classes.button} href="https://vinaymehta1860.github.io/amazon_product_review/" target="_blank">
                web application
              </Button>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2018 - April 2019"
            iconStyle={{ background: 'rgb(245, 147, 0)', color: '#fff' }}
            icon={<CodeIcon />}
          >
            <div className={classes.techTexts} role="button">
              <Typography variant="subheading" className={classes.techText}> Angular </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Canvas API </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Python </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> AWS </Typography>
            </div>
            <h3 className="vertical-timeline-element-title">Web Application for Generating Indoor Maps</h3>
            <h4 className="vertical-timeline-element-subtitle">CSE 485/486 - Capstone</h4>
            <p>
              Created a web application that allows users to upload a configuration file which includes specifications about a room (size, furniture, etc.) and generates a digital drawing of the map. Users can search through previously uploaded map files and can also download the file as well as delete.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October - December 2018"
            iconStyle={{ background: 'rgb(245, 147, 0)', color: '#fff' }}
            icon={<CodeIcon />}
          >
            <div className={classes.techTexts} role="button">
              <Typography variant="subheading" className={classes.techText}> Swift </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> XCode </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Zomato API </Typography>
              &nbsp;
              <Typography variant="subheading" className={classes.techText}> Firebase </Typography>
            </div>
            <h3 className="vertical-timeline-element-title">Food Search iOS Application</h3>
            <h4 className="vertical-timeline-element-subtitle">CSE 335 - Mobile Applications</h4>
            <p>
              Created an iOS application that allowed users to search up cuisines in a location by entering a city or zip-code as input. The user will be returned a list of restaurants that satisfy the specifications given. Required a user log-in so that each user can add restaurants to his/her favorites list where favorited restaurants will be saved.
            </p>
          </VerticalTimelineElement>
        </div>
        <br />
        <br />
        <br />
        <div className={classes.dislaimer}>
          <MuiThemeProvider theme={this.props.theme}>
            <Typography color={"primary"} variant="subheading" gutterBottom align='center' className={classes.disclaimerText}>2020 © DEVELOPED BY SEMIRA CHUNG WITH ♥ AND REACT &amp; MATERIAL-UI</Typography>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);