import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
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
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
          </div>
        </Zoom>
      );
    }
    
    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
      };

      export default function Common(props) {
        return (
            <ThemeProvider theme={theme}>
            <React.Fragment>
              <CssBaseline />
              <AppBar style={{textAlign:"center"}}>
                <Toolbar>
                  <Typography variant="h6"  style={{width:"100%",color:"#fff"}}>ORU KADHAI</Typography>
                </Toolbar>
              </AppBar>
              <Toolbar id="back-to-top-anchor" style={{minHeight:"0px"}} />
              <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top" style={{color:"white"}}>
                <KeyboardArrowUpIcon />
               </Fab>
              </ScrollTop>
            </React.Fragment>
          </ThemeProvider>
        )
      }      