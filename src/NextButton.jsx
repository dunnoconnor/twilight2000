import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import roll from './Roll';
import PropTypes from 'prop-types';

function NextButton({ attributes,setAttributes}) {
    const [open, setOpen] = useState(false);
    const [rollResult, setRollResult] = useState([0, 0]);
    const [rollTotal, setRollTotal] = useState(0);

    function rollAttributes() {
        const result = roll(2, 3);
        setRollResult(result);
        setRollTotal(result[0] + result[1]);
        setOpen(true);
    }
    function handleClick(attribute) {
        setRollTotal(rollTotal - 1);
        setAttributes({
            ...attributes,
            [attribute]: {
                ...attributes[attribute],
                dieSize: attributes[attribute].stepUpDieSize(attributes[attribute].dieSize),
                label: attributes[attribute].stepUpLabel(attributes[attribute].dieSize)
            }
        });
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={rollAttributes}>Roll Attributes</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Roll Results</DialogTitle>
                <DialogContent>
                    <p>Roll Results: {rollResult.join(', ')}</p>
                    <p>Total: {rollTotal}</p>
                    {Object.keys(attributes).map((attribute) => (
                        <Button
                            key={attribute}
                            variant="contained"
                            disabled={attributes[attribute].label === "A" || rollTotal === 0}
                            onClick={() => handleClick(attribute)}
                        >
                            + {attribute}
                        </Button>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
// Props Validation
NextButton.propTypes = {
    attributes: PropTypes.object.isRequired,
    setAttributes: PropTypes.func.isRequired
}

export default NextButton;