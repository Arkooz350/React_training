
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup 
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button style={{backgroundColor :'#f5cb5c' , color:'#242423' }}>First</Button>
      <Button style={{backgroundColor :'#f5cb5c' , color:'#242423'}}>Second</Button>
    </ButtonGroup>
  );
}
