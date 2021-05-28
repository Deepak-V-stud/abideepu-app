import 'date-fns';
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const App = () => {
const [name, setName] = React.useState('');
const handleNameChange = (event) => {
  setName(event.target.value);
  console.log(event.target.value);
};

const [selectedDate, setSelectedDate] = useState(new Date());

const handleDateChange = (date) => {
  console.log(date);
  setSelectedDate(date);
};

const classes = useStyles();
  const [classofstudent, setClass] = React.useState('');

  const handleChange = (event) => {
    setClass(event.target.value);
  };

  const [division, setDivision] = React.useState('');
  const doChange = (event) => {
    setDivision(event.target.value);
  };

  const [gender, setGender] = React.useState('');

  const makeChange = (event) => {
    setGender(event.target.value);
  };

  const [students, setStudents] = useState(null);

  function handleSubmit(e) {
    console.log('Going to call POST');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "name" :name,
        "dateOfBirth" : moment(selectedDate).format('DD-MM-YYYY'),
        "studentClass" : classofstudent,
        "division" : division,
        "gender" :  gender 
    
    })
  };
  fetch('http://localhost:8081/students/save', requestOptions)
      .then(response => response.json())
      .then(data => {
        let studentlist = data.map(student => {
          return ( <tr key={student.id}><td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.dateOfBirth}</td>
          <td>{student.studentClass}</td>
          <td>{student.division}</td>
          <td>{student.gender}</td></tr>
          )
        })
       setStudents(studentlist);
      })
      e.preventDefault();
  };

return (
  <div class="row">
    <div class="column">
    <grid>
    <form  onSubmit={handleSubmit}>
	<div className='card'>
    <h3>Name : {name} </h3>
	<TextField required
  type="text"
  variant="outlined"
		value={name}
		label=""
		onChange={handleNameChange}
    />
	
  <h3>Date of Birth:</h3>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>

<KeyboardDatePicker
  label=""
  format="dd/MM/yyyy"
  value={selectedDate}
  onChange={handleDateChange}
/>
</MuiPickersUtilsProvider>

      <h3>Class:</h3>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="classs-outlined-label">class</InputLabel>
        <Select 
          labelId="class-outlined-label"
          id="class"
          value={classofstudent}
          onChange={handleChange}
          label="class"
        >
          <MenuItem value='I'>I</MenuItem>
          <MenuItem value='II'>II</MenuItem>
          <MenuItem value='III'>III</MenuItem>
          <MenuItem value='IV'>IV</MenuItem>
          <MenuItem value='V'>V</MenuItem>
          <MenuItem value='VI'>VI</MenuItem>
          <MenuItem value='VII'>VII</MenuItem>
          <MenuItem value='VIII'>VIII</MenuItem>
          <MenuItem value='IX'>IX</MenuItem>
          <MenuItem value='X'>X</MenuItem>
          <MenuItem value='XI'>XI</MenuItem>
          <MenuItem value='XII'>XII</MenuItem>
        </Select>
      </FormControl>
        
          <h3>Division:</h3>
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="Division-outlined-label">Division</InputLabel>
        <Select
          labelId="Division-outlined-label"
          id="Division-outlined"
          value={division}
          onChange={doChange}
          label="Division"
        >
          <MenuItem value='A'>A</MenuItem>
          <MenuItem value='B'>B</MenuItem>
          <MenuItem value='C'>C</MenuItem>
        </Select>
      </FormControl>
        
        <h3>Gender</h3>
      <FormControl component="fieldset">
  <FormLabel component="legend"></FormLabel>
  <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={makeChange}>
    <FormControlLabel value="Female" control={<Radio />} label="Female" />
    <FormControlLabel value="Male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>

      <div style={{
        marginLeft: "25%",
      }}
    >
        <button className='btn' alignment='center' margin='20%' type="submit">
          submit
        </button></div></div>
        </form></grid>
        </div>
        <div class="column">
        <grid>
          <h2 align='center'>Enrolled Students List</h2>
  <table width="100%" border='1px solid black'>
    <tr><th>ID</th><th>Name</th><th>DOB</th><th>Class</th><th>Division</th><th>Gender</th></tr>
    {students}
  </table>
  </grid></div></div>
);
};


export default App;
