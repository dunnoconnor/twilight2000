import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

function AttributeList({ attributes }) {
    return (
        <Stack direction="row" spacing={2}>
            {Object.keys(attributes).map((key) => (
                <Stack direction="row" spacing={2} key={key}>
                    <p>{attributes[key].name}</p>
                    <p>{attributes[key].label}</p>
                    <p>{attributes[key].dieSize}</p>
                </Stack>
            ))}
        </Stack>
    );
};

AttributeList.propTypes = {
    attributes: PropTypes.object.isRequired
}


export default AttributeList;