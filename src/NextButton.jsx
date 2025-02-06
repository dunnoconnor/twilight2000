import Button from '@mui/material/Button';
import roll from './Roll';

function NextButton() {

    function rollAttributes() {
        roll(2, 3);
    }

    return (
        <div>
        <Button variant="outlined" onClick={rollAttributes}>Roll Attributes</Button>
        </div>
    );
};

export default NextButton;