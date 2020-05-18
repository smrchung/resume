import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import SkillBar from 'react-skillbars';
import { MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: grey[50],
  },
  info: {
    paddingTop: 40,
    width: window.innerWidth * .45,
    marginLeft: 0
  },
});

let languages = ["Java", "JavaScript", "HTML/CSS", "SQL", "Python"];
let lang_levels = [70, 85, 80, 60, 55, 60];
let color = {
  "bar": "black",
  "title": {
    "text": "#111",
    "background": "#fff"
  }
};

let frameworks = ["Node.js", "React.js", "Angular", "Spring"];
let framework_levels = [75, 80, 70, 65];

let softwares = ["MongoDB", "PostgreSQL", "MySQL"];
let software_levels = [75, 65, 70];

class Skills extends React.Component {
  generateLangSkills = () => {
    let programming_skills = [];
    for (let i = 0; i < languages.length; i++) {
      let obj = {};
      obj.type = languages[i];
      obj.level = lang_levels[i];
      obj.color = color;
      programming_skills.push(obj);
    }
    return programming_skills;
  }

  generateFrameworkSkills = () => {
    let frameworks_array = [];
    for (let i = 0; i < frameworks.length; i++) {
      let obj = {};
      obj.type = frameworks[i];
      obj.level = framework_levels[i];
      obj.color = color;
      frameworks_array.push(obj);
    }
    return frameworks_array;
  }

  generateSoftwareTools = () => {
    let software_tools = [];
    for (let i = 0; i < softwares.length; i++) {
      let obj = {};
      obj.type = softwares[i];
      obj.level = software_levels[i];
      obj.color = color;
      software_tools.push(obj);
    }
    return software_tools;
  }

  PROGRAMMING_SKILLS = this.generateLangSkills();
  FRAMEWORKS = this.generateFrameworkSkills();
  SOFTWARES = this.generateSoftwareTools();

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.info}>
          <MuiThemeProvider theme={this.props.theme}>
            <Typography color={"black"} variant="display2" gutterBottom> Technical Skills </Typography>
            <Typography color={"black"} variant="title" gutterBottom> Programming/Scripting Languages </Typography>
            <SkillBar skills={this.PROGRAMMING_SKILLS} />
            <br />
            <Typography color={"black"} variant="title" gutterBottom> Frameworks </Typography>
            <SkillBar skills={this.FRAMEWORKS} />
            <br />
            <Typography color={"black"} variant="title" gutterBottom> Databases </Typography>
            <SkillBar skills={this.SOFTWARES} />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);