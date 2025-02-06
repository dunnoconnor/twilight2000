import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

function SkillList({ skills }) {
    return (
        <>
            {Object.keys(skills).map((key) => (
                <Stack direction="row" spacing={2} key={key}>
                    <p>{skills[key].name}</p>
                    <p>{skills[key].value.label}</p>
                    <p>{skills[key].value.dieSize}</p>
                </Stack>
            ))}
        </>
    );
};

SkillList.propTypes = {
    skills: PropTypes.object.isRequired
}


export default SkillList;