import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import roll from './roll';
import PropTypes from 'prop-types';

function NextButton({ attributes, setAttributes }) {
    const [state, setState] = useState({
        open: false,
        rollResult: [0, 0],
        rollTotal: 0,
    });

    // Rolls attributes using the roll function
    function rollAttributes() {
        try {
            const result = roll(2, 3); // Replace magic numbers with constants or props
            setState({
                ...state,
                rollResult: result,
                rollTotal: result[0] + result[1],
                open: true,
            });
        } catch (error) {
            console.error('Error rolling attributes:', error);
        }
    }

    // Handles attribute updates when a button is clicked
    function handleClick(attribute) {
        if (!attributes[attribute]?.stepUpDieSize || !attributes[attribute]?.stepUpLabel) {
            console.warn(`Attribute ${attribute} is missing required methods.`);
            return;
        }

        setState({
            ...state,
            rollTotal: state.rollTotal - 1,
        });

        setAttributes({
            ...attributes,
            [attribute]: {
                ...attributes[attribute],
                dieSize: attributes[attribute].stepUpDieSize(attributes[attribute].dieSize),
                label: attributes[attribute].stepUpLabel(attributes[attribute].dieSize),
            },
        });
    }

    function handleClose() {
        setState({ ...state, open: false });
    }

    return (
        <div>
            <Button variant="outlined" onClick={rollAttributes}>Roll Attributes</Button>
            <Dialog open={state.open} onClose={handleClose} aria-labelledby="roll-results-dialog">
                <DialogTitle id="roll-results-dialog">Roll Results</DialogTitle>
                <DialogContent>
                    <p>Roll Results: {state.rollResult.join(', ')}</p>
                    <p>Total: {state.rollTotal}</p>
                    {Object.keys(attributes).map((attribute) => (
                        <Button
                            key={attribute}
                            variant="contained"
                            disabled={attributes[attribute].label === "A" || state.rollTotal === 0}
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
    attributes: PropTypes.objectOf(
        PropTypes.shape({
            dieSize: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            stepUpDieSize: PropTypes.func.isRequired,
            stepUpLabel: PropTypes.func.isRequired,
        })
    ).isRequired,
    setAttributes: PropTypes.func.isRequired,
};

export default NextButton;