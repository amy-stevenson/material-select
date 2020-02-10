import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import 'typeface-roboto'

const useStyle = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
const App = () => {
  const classes = useStyle();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('age appears here');


  const handleChange = (event) => {

    let value = event.target.value

    setInput(value);
    value = 'Age is: ' + value;
    setOutput(value);
    console.log(`input is now: ${event.target.value}  output is now: ${value}`)
  };


  return (
    <div data-testid="form" style={{fontFamily: 'Roboto'}}>
      <h3>Material UI</h3>
      <FormControl className={classes.root}>

        <InputLabel htmlFor="demo-controlled-open-select" data-testid="label">Age</InputLabel>
        <Select
          value={input}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "demo-controlled-open-select",
            "data-testid": "selectInput",
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

      </FormControl>
      <p id="outputValues" data-testid="output">{output}</p>
    </div>
  );
};

export default App;
