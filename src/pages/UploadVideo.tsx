import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { categorias } from '../data/Categorias';

const steps = ['Select campaign settings', 'Create an ad group'];

export default function UploadVideo() {
    const [activeStep, setActiveStep] = React.useState(0);
    
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",paddingTop:"2rem"}}>
        <div style={{width:"60%", display:"flex"}}>
            <Button variant="text" startIcon={<KeyboardDoubleArrowLeftIcon />} href="/" style={{marginBottom: "0.75rem"}}>Volver al inicio</Button>
        </div>
        <Box sx={{ width: '60%' ,background: '#ffffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
        <Stepper nonLinear alternativeLabel activeStep={activeStep} sx={{ margin: '0 auto',width: '60%',
    
            '& .MuiStepIcon-root': {
                fontSize: '3rem',
                color: '#cfd8dc',
            },
            '& .MuiStepIcon-root.Mui-completed': {
                color: '#5fc44bd2',
            },
            '& .MuiStepIcon-root.Mui-active': {
                color: 'primary.main',    
            },
            '& .MuiStepLabel-label': {
                fontSize: '1rem', 
                marginTop: '0.5rem',
            },   
            '& .MuiStepConnector-line': {
                borderTopWidth: '5px', 
                borderRadius: '4px',   
                width: '35%',
                margin: '0 auto',
                borderColor: '#cfd8dc',
            }, 
            '& .MuiStepConnector-alternativeLabel': {
                top: 24,  // La mitad de la altura de tu icono (48px / 2)
                left: 'calc(-50% + 24px)', // Ajustamos el offset al nuevo centro
                right: 'calc(50% + 24px)',
                position: 'absolute',
                
    },
            
        }}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]} >
            <StepButton color="inherit" onClick={handleStep(index)} >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep === 0 ? (
               <>
               <TextField fullWidth label="Titulo del video *" variant="outlined" />
               <TextField fullWidth label="Descripción del video *" variant="outlined" multiline rows={4} style={{marginTop: '1rem'}} />
               <TextField id="outlined-select-currency" select label="Elige una categoria *" style={{marginTop:"1rem",width:"100%"}}>
                    {categorias.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
               </>
            ) :
               activeStep === 1 ? "Crea un grupo de anuncios para tu campaña." : 
               
               ""}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
    </div>
  );
}