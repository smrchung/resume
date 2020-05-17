import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from './Pages/Home'
// import About from './Pages/About'
// import Work from './Pages/Work'
// import Projects from './Pages/Projects'
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import scrollToComponent from 'react-scroll-to-component';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      },
      secondary: {
        main: grey[800]
      },
    },
    typography: {
      fontFamily: [
        'Muli',
      ],
    }
  });

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = () => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  disclaimerText: {
    backgroundColor: grey[800],
    color: "#FFFFFF",
  }
});

class App extends React.Component {
  state = {
    value: 0,
    color: blueGrey[800],
    textColor: theme.primary
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleTabClick = (value) => {
    switch(value) {
      case 0:
        scrollToComponent(this.Home, { offset: 0, align: 'top'})
        this.setState({color: blueGrey[800]});
        break;
      // case 1:
      //   scrollToComponent(this.About, { offset: 0, align: 'top'})
      //   this.setState({color: grey[800]});
      //   break;
      // case 2:
      //   scrollToComponent(this.Work, { offset: 0, align: 'top'})
      //   this.setState({color: teal[200]});
      //   break;
      // case 3:
      //   scrollToComponent(this.Projects, { offset: 0, align: 'top'})
      //   this.setState({color: blueGrey[300]});
      //   break;
      default:
        scrollToComponent(this.Home, { offset: 0, align: 'top'})
          this.setState({color: blueGrey[800]});
          break;
    }
  }

  //changes color of navbar depending on current div scrolled
  handleScroll = () => {
    var spot = window.pageYOffset;
    var window_height = window.innerHeight;

    //home page
    if(spot >= 0 && spot <= window_height) {
      this.handleChange(0);
      this.setState({color: blueGrey[800]});
    } //about page
    // else if(spot > window_height && spot < window_height * 2) {
    //   this.handleChange(2);
    //   this.setState({color: grey[800]});
    // } //work experience page
    // else if(spot >= window_height * 2 && spot < (window_height * 3 + 650)) {
    //   this.handleChange(3);
    //   this.setState({color: grey[900]});
    // } //projects page
    // else {
    //   this.handleChange(4);
    //   this.setState({color: grey[800]});
    // }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div onScroll={this.handleScroll}>
        <AppBar className={classes.root} position="fixed" style={{backgroundColor: this.state.color}}>
          <MuiThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor={theme.secondary}
              textColor={theme.secondary}
              centered
              fixed
            >
              <Tab label="HOME" onClick={() => this.handleTabClick(0)}/>
              {/* <Tab label="ABOUT" onClick={() => this.handleTabClick(1)}/>
              <Tab label="WORK EXPERIENCE" onClick={() => this.handleTabClick(2)}/>
              <Tab label="PROJECTS" onClick={() => this.handleTabClick(3)}/> */}
            </Tabs>
          </MuiThemeProvider>
        </AppBar>
        <section><Home className='home' ref={(section) => { this.Home = section; }} theme={theme}/></section>
        {/* <section><About className='about' ref={(section) => { this.About = section; }} theme={theme}/></section>
        <section><Work className='work' ref={(section) => { this.Work = section; }} theme={theme}/></section>
        <section><Projects className='project' ref={(section) => { this.Projects = section; }} theme={theme}/></section> */}
        <div className={classes.dislaimer}>
          <Typography color={"primary"} variant="body2" gutterBottom align='center' className={classes.disclaimerText}>SEMIRA CHUNG <a href="https://github.com/smrchung/main">©</a> 2020</Typography>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);