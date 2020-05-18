import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import grey from '@material-ui/core/colors/grey';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: grey[50],
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
});

class Work extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.info}>
          <br/><br/><br/>
          <MuiThemeProvider theme={this.props.theme}>
            <Typography color={"black"} variant="display2" gutterBottom> Work Experience </Typography>
          </MuiThemeProvider>

          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Starting August 2020"
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer II @ American Express</h3>
              <h4 className="vertical-timeline-element-subtitle">Phoenix, AZ</h4>
              <p>
                TBD
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June - August 2019"
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <div className={classes.techTexts} role="button">
                <Typography variant="subheading" className={classes.techText}> Angular JS </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> Spring </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> Cassandra </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> MQTT </Typography>
              </div>
              <h3 className="vertical-timeline-element-title">Software Engineering Intern @ Verizon Connect</h3>
              <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
              <p>
                Developed an Angular JS application that displays on-demand locations on a MapQuest map, location details,
                and history of trips from Cassandra Database using JSON objects retrieved from HTTP requests. It aims to reduce latency by 95% in product communication by researching and using an emerging IoT messaging protocol called MQTT.     </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2017 - December 2018"
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <div className={classes.techTexts} role="button">
                <Typography variant="subheading" className={classes.techText}> React.js </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> Node.js </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> Spring </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> PostgreSQL </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> DF </Typography>
              </div>
              <h3 className="vertical-timeline-element-title">Software Development Intern @ State Farm</h3>
              <h4 className="vertical-timeline-element-subtitle">Phoenix, AZ</h4>
              <p>
                Developed two React web applications. The first web application housed a chatbot that answered questions users have as well as reserved rooms within the buildings. 
                The other web application had a purpose of allowing users to submit forms for decision making in which the information is stored into a database. Users can also add comments to converse with each other.
                
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May - August 2017"
              iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <div className={classes.techTexts} role="button">
                <Typography variant="subheading" className={classes.techText}> PowerShell </Typography>
                &nbsp;
                <Typography variant="subheading" className={classes.techText}> Microsoft SharePoint </Typography>
              </div>
              <h3 className="vertical-timeline-element-title">Systems Intern @ State Farm</h3>
              <h4 className="vertical-timeline-element-subtitle">Bloomington, IL</h4>
              <p>
                Analyzed Windows PowerShell scrips which were used to access the servers of Microsoft SharePoint. Organized the scripts into a script repository created on SharePoint for easier and quicker future access. Utilized and 
                added applications, as well as manipulated code of web parts of SharePoint sites in order to fix issues.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work);