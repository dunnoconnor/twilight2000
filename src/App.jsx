import { useState } from 'react'
import './App.css'
import Character from './Character'
import Attributes from './Attributes';
import Skills from './Skills';
import SkillList from './SkillList';
import AttributeList from './AttributeList';
import NextButton from './NextButton';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const initialCharacter = new Character();
  const initialAttributes = new Attributes();
  const initialSkills = new Skills();

  const [character] = useState(initialCharacter);
  const [attributes,setAttributes] = useState(initialAttributes);
  const [skills] = useState(initialSkills);

  console.log(character);
  console.log(attributes);
  console.log(skills);

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <h1>Twilight 2000</h1>
      <AttributeList attributes={attributes} />
      <SkillList skills={skills} />
      <Card>
        <NextButton attributes={attributes} setAttributes={setAttributes}/>
      </Card>
  </ThemeProvider>

  )
}

export default App
