import React from "react"
import TextField from 'material-ui/TextField';

const Display = ({ peopleFiltered, onKeyPress, Filters, }) => (
  <div>
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
      onKeyPress={onKeyPress}
    />
    <h1>Results for {Filters}</h1>
    {peopleFiltered.map(({ id, participant_name, account_number }) => (
      <li key={id}>
        <strong>{participant_name}</strong><br />
        {account_number}
      </li>
    ))}
  </div>
)

export default Display
