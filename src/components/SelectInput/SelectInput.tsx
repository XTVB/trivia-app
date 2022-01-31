import React, { FC } from 'react';
import useStyles from './SelectInputStyles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Handler } from 'react-reactive-form';

type Option = {
  value: string | number | undefined;
  label: string;
};

type SelectInputProps = {
  handler: Handler;
  label: string;
  options: Option[];
};

const SelectInput: FC<SelectInputProps> = ({ handler, label, options }: SelectInputProps) => {
  const { classes } = useStyles();

  return (
    <FormControl fullWidth>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <Select
        classes={{
          icon: classes.icon,
        }}
        MenuProps={{
          classes: {
            paper: classes.paper,
          },
        }}
        label={label}
        {...handler}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
