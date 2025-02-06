import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import SkillList from './SkillList';
import Stack from '@mui/material/Stack';

export default function Stats({ characterStats }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={4}>
        {Array.from(Object.keys(characterStats.attributes)).map((attribute, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Stack>
                <Stack direction="row" spacing={2}>
                    <p>{characterStats.attributes[attribute].name}</p>
                    <p>{characterStats.attributes[attribute].value.label}</p>
                    <p>{characterStats.attributes[attribute].value.dieSize}</p>
                </Stack>
                <SkillList skills={characterStats.attributes[attribute].skills} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Stats.propTypes = {
    characterStats: PropTypes.object.isRequired
}

