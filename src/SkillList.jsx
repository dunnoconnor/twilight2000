import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

function SkillList({ skills }) {
    const skillKeys = Object.keys(skills);
    const columns = [[], [], [], []];

    skillKeys.forEach((key, index) => {
        columns[index % 4].push(
            <Stack direction="row" spacing={2} key={key}>
                <p>{skills[key].name}</p>
                <p>{skills[key].label}</p>
                <p>{skills[key].dieSize}</p>
            </Stack>
        );
    });

    return (
        <Stack direction="row" spacing={2}>
            {columns.map((column, index) => (
                <Stack key={index} spacing={2}>
                    {column}
                </Stack>
            ))}
        </Stack>
    );
}

SkillList.propTypes = {
    skills: PropTypes.object.isRequired
}


export default SkillList;