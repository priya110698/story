import React from 'react';
import '../App.css';
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


export default function BackToTop(props) {
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
      <Container>
   <Box my={2}>
   <p className="contentSec">
    டேபிள் மேல வைப்ரேட் ஆயிட்டு இருக்க போனை எடுத்து ஹலோனு 
    சொல்லுறா ஸ்வேதா. அந்தப்பக்கம் ஸ்வேதா நான் ஜோசப் பேசுறேன் 
    (ரொம்ப வருஷத்துக்கு முன்னாடி ரொம்ப அதிகமா கேட்ட குரல்) <br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> ஹேய்... சொல்லு ஜோசப்...  <br />
    <div className="w20p">ஜோசப் </div><span>:</span> எப்படி இருக்க ஸ்வேதா?? <br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> நல்லா இருக்கேன் ஜோசப்... நீ எப்படி இருக்க??? வீட்ல எல்லாரும் எப்படி இருக்காங்க?<br />
    <div className="w20p">ஜோசப் </div><span>:</span> நான் ரொம்ப நல்லா இருக்க வீட்லயும் எல்லாரும் ரொம்ப நல்லா இருக்காங்க...<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> ம்ம்... அப்புறம் ஜோசப்<br />
    <div className="w20p">ஜோசப் </div><span>:</span> எனக்கு மேரேஜ்(marriage) பிக்ஸ் ஆயிருக்கு ஸ்வேதா<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> ஓ... சூப்பர் ஜோசப், கங்கிராஜுலேசன் (congratulation)<br />
    <div className="w20p">ஜோசப் </div><span>:</span> தேங்க்ஸ்(thanks) ஸ்வேதா<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> அப்புறம் பொண்ணு என்ன பண்றாங்க?<br />
    <div className="w20p">ஜோசப் </div><span>:</span> சென்னையில இருக்க MNC ல work பண்ணிட்டு இருக்காங்க<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> ஓ சூப்பர் நீ எதிர்பார்த்த மாதிரியே அமஞ்சிருச்சு<br />
    <div className="w20p">ஜோசப் </div><span>:</span> ஆமா ஸ்வேதா<br />
    (இருவரும் மௌனமாய்...)<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> சரி ஜோசப், ஐ ஹேவ் சம் வர்க் ஐ வில் கால் யூ லேட்டர்(i have some work i'll call you later) 
    அப்படின்னு சொல்லிட்டு கால கட் பண்ணீடுறா.<br />
    நான் ஏன் இப்போ கால கட் பண்ணுன அவன் எப்படி இவ்வளவு சகஜமா எதுவுமே நடக்காத 
    மாதிரி பேசறான் என்னாலயும் எப்படி எதுவுமே நடக்காத மாதிரி பேச முடிஞ்சுது?? இதுக்கெல்லாம் காலம் தான் காரணம்
    "எல்லாம் சில காலம் தான்" அர்த்தம் இப்ப விளங்குது... அப்புறம் எதுக்காக போன கட் பண்ணனும் நான்?
    ஆமால்ல நான் கொஞ்சம் லேட் பிக்கப் தான ஸோ அதிலிருந்து கொஞ்சம் வெளியே வந்து 
    பிக்கப் ஆக லேட்டாகும் போல நமக்கு ஸ்வேதா யூ நீட் மோர் பிரக்டிஸ் (you need more practice) அப்டின்னு தனக்குள்ளேயே 
    பேசிட்டு தன்னோட ஸேப்ரேட் கேபின்(separate cabin)ல இருந்து எழுந்து ஆஃபிஸ்க்குள்ள 
    போறா, எல்லாரும் லஞ்சுக்கு போயிட்டாங்க ஆபீசே வெறிச்சோடி கிடந்தது.சரினு சொல்லிட்டு ஸ்வேதாவோட
    ஆபீஸ் பார்ட்னரான வெற்றி கேபினுக்கு போறா.<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> எக்ஸ்க்யூஸ் மீ வெற்றி<br />
    <div className="w20p">வெற்றி </div><span>:</span>  எஸ் கம் அன்ட் சிட் ஸ்வேதா(yes come and sit swetha)<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> இன்னைக்கு ஏதும் கிளைன்ட் கால்ஸ் இருக்கா எனக்கு<br />
    <div className="w20p">வெற்றி </div><span>:</span>  ஆமா ஸ்வேதா நியூ கிளைன்ட் மீட்டிங் இருக்கு 
    அனேகமா நான் இருக்க மாட்டேன் என்று நினைக்கிறேன் கிளைன்ட் மீட் பண்ண வெளியே போய்விடுவான்
    நீதான் அந்த கிளைன்ட் கிட்ட பேசி ப்ராஜெக்ட் ஓகே பண்ற மாதிரி இருக்கும்.<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> ஓகே வெற்றி ப்ராஜெக்ட்டோட(project) ரெக்விரிமெண்ட்ஸ் (requirements) எதாவது சொன்னாங்களா<br />
    <div className="w20p">வெற்றி </div><span>:</span>  இல்ல  இன்னிக்கு ஈவினிங் தான் எல்லாம் சொல்றேன்னு சொல்லி இருக்காங்க<br />
    <div className="w20p">ஸ்வேதா </div><span>:</span> ஓகே வெற்றி அதை பத்திதான் கேக்கலாம்னு வந்தேன்.
    சரி லஞ்ச் போலாமா வெற்றி<br />
    <div className="w20p">வெற்றி </div><span>:</span> ஓகே ஸ்வேதா.... இரண்டு பேரும் லஞ்சுக்கு போறாங்க
 ஸ்வேதா லஞ்ச் முடிச்ச அப்புறம், கிளைன்ட் மீட்டிங் எல்லாம் முடிச்சிட்டு ஆபீஸ்ல டீம் மெம்பர்ஸ்
 கூட டீம் மீட்டிங் கண்டக்ட் பண்ணி டீம் மீட்டிங் முடிச்சுட்டு வெற்றி கேபின்க்கு போய் வெற்றி எனக்கு கொஞ்சம் ஹெட் ஏக்கா இருக்கு
 கிளைண்ட் மீட்டிங் டீம் மீட்டிங் எல்லாமே முடிஞ்சது. எக்ஸிஸ்டிங்(existing) ப்ராஜெக்ட் ஓட
 கிளைண்ட்ஸ் கால் பண்ணுவாங்க நான் டீம் மெம்பர்ஸ் கிட்ட இன்ஃபார்ம் பண்ணிட்ட
 சோ அவங்க பேசிப்பாங்க சப்போஸ்(suppose) கிளைண்ட் எம்டி(MD) கிட்ட பேசணும் சொல்லி 
 கேட்டாங்கன்னா நீங்க மேனேஜ் ?? இல்ல உங்களுக்கு வொர்க் ஜாஸ்தியா இருக்கா??<br />
 <div className="w20p">வெற்றி </div><span>:</span> வொர்க்(work) இருக்கு ஸ்வேதா பட் ஐ வில் மேனேஜ்(i'll manage).
 </p>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top" style={{color:"white"}}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
    </ThemeProvider> 
  );
}
