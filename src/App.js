import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import BackToTop from './pages/pageOne';
import { BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import PagesTwo from './pages/pageTwo';
import PageThree from './pages/pageThree';
import PageFour from './pages/pageFour';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#02bfac",
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
  },
}));


class App extends React.Component {
  userData;
  constructor() {
    super();
    this.state = {
      count : 0,
      remember : '',
      user : '',
      isLoading : true
    }
  }
 
  makeStyles = ((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  navNext = (e) => {
    e.preventDefault();
    this.setState({
      count:this.state.count + 1
    })
    const {count} = this.state;
    localStorage.setItem('Count',count);
    console.log(count);
  }

  navPrev = (e) => {
    e.preventDefault();
    console.log(this.state.count);
    this.setState({
      count:this.state.count - 1
    })
  }
  
  componentDidMount() {
    this.userData =JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')) {
      this.setState({
        user : this.userData.user,
        count : this.userData.count
      })
    }
      else {
        this.setState({
          user : ''
        })
      }
    }
  
  componentWillUpdate(nextProps,nextState) {
    const {user} = this.state;
    localStorage.setItem('user',JSON.stringify(nextState));     
  }
  
  changeFun = (e) => {
    const v = e.target;
    const val = v.type === 'checkbox' ? v.checked : v.value ;
    this.setState({
      [v.name] : val
    })
  }

  onSubFunc = (e) => {
    e.preventDefault();
    const {user,remember} = this.state;
    localStorage.setItem('users', remember ? user : '');
    localStorage.setItem('Remembers', remember);
  }

  render(){
  return (
    <div className={makeStyles.root}>
      <Box bgcolor="grey.300" height="50px" width={1}>
        <h3 align="center"> Oru Kadhai</h3>
      </Box>
    <Container fixed>
      <Router>
      <Route exact path="/" component={BackToTop}></Route>  
      <Route exact path="/pageTwo" component={PagesTwo}></Route> 
      <Route exact path="/PageThree" component={PageThree}></Route> 
      <Route exact path="/pageFour" component={PageFour}></Route> 
      <Switch>
       <ul className="navButton">
         { 
          this.state.count == 0 ? 
            <li onClick={this.navNext} className="right">
               <Link  to="/pageTwo">
                 <ThemeProvider theme={theme}>
                   <Button  theme={theme} variant="contained" color="primary" style={{color:"#fff"}}> Next &gt;&gt; </Button>
                  </ThemeProvider>
                </Link>
            </li>
          :
          this.state.count == 1 ? 
          <ul>
             <li onClick={this.navPrev}>
               <Link to="/"> 
               <ThemeProvider theme={theme}>
                   <Button  theme={theme} variant="contained" color="primary" style={{color:"#fff"}}> &lt;&lt; Prev </Button>
                  </ThemeProvider>
               </Link>
             </li>
             <li onClick={this.navNext} className="right">
              <Link  to="/PageThree"> 
              <ThemeProvider theme={theme}>
                   <Button  theme={theme} variant="contained" color="primary" style={{color:"#fff"}}> Next &gt;&gt; </Button>
                  </ThemeProvider>
              </Link>
            </li> 
           </ul>
            : 
            this.state.count == 2 ? 
            <ul>
             <li onClick={this.navPrev}>
              <Link to="/pageTwo"> 
              <ThemeProvider theme={theme}>
                   <Button  theme={theme} variant="contained" color="primary" style={{color:"#fff"}}> &lt;&lt; Prev </Button>
                  </ThemeProvider>
              </Link>
            </li>
            <li onClick={this.navNext} className="right">
             <Link to="/PageFour"> 
             <ThemeProvider theme={theme}>
                   <Button  theme={theme} variant="contained" color="primary" style={{color:"#fff"}}> Next &gt;&gt; </Button>
                  </ThemeProvider>
             </Link>
           </li>
          </ul>
          : 
          this.state.count == 3 ? 
          <ul>
             <li onClick={this.navPrev}>
              <Link to="/pageThree"> 
              <ThemeProvider theme={theme}>
                   <Button  theme={theme} variant="contained" color="primary" style={{color:"#fff"}}> &lt;&lt; Prev </Button>
                  </ThemeProvider>
              </Link>
            </li>
            </ul> : ''
          }
        </ul>
      </Switch>
    </Router>
    </Container>
  </div>

  );
}
}

export default App;

