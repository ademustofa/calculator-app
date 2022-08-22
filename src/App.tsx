import React, { useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Checkbox,
  ButtonGroup,
  Button,
  Typography,
  Snackbar
} from "@mui/material";

import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type ValueProps = string[];
type CheckedProps = number[];
type OperatorProps = "subtract" | "add" | "multiply" | "divide";

const App = () => {
  const [checkedInput, setCheckedInput] = useState<CheckedProps>([0, 1, 2]);
  const [valueInput, setValueInput] = useState<ValueProps>(["", "", ""]);
  const [result, setResult] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if(checkedInput.length < 2) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  } ,[checkedInput])


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleToggleChecked = (value: number) => (): void => {
    const currentIndex = checkedInput.indexOf(value);
    const newChecked = [...checkedInput];
    const newValue: ValueProps = [...valueInput];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      newValue[value] = "";

      setValueInput(newValue);
    }
   
    setCheckedInput(newChecked);
  };

  const handleChangeInput =
    (idx: number) =>
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: ValueProps = [...valueInput];
        newValue[idx] = e.target.value;
        setValueInput(newValue);
      };

  const handleSetOperator = (param: OperatorProps) => (): void => {
    let value: any = 0;
    const remapVal = valueInput.filter(res => res !== "").map(res => Number(res))

    if (param === "add") {
      value = remapVal.reduce((acc, val) => acc + val);
    }

    if (param === "subtract") {
      value = remapVal.reduce((acc, val) => acc - val);
    }

    if (param === "multiply") {
      value = remapVal.reduce((acc, val) => acc * val);
    }

    if (param === "divide") {
      value = remapVal.reduce((acc, val) => acc / val);
    }

    setResult(value);
  };

  return (
    <>
        <Snackbar  anchorOrigin={{ vertical: "top", horizontal:"center" }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please checked at least 2 input
        </Alert>
      </Snackbar>
      <Stack
        spacing={2}
        sx={{ pt: 15 }}
        // justifyContent="center"
        alignItems="center"
      >
        {valueInput.map((res, index) => (
          <Stack key={index} direction="row" spacing={2}>
            <TextField
              data-testid="input-test"
              disabled={checkedInput.indexOf(index) === -1}
              size="small"
              value={res}
              onChange={handleChangeInput(index)}
              label={`Value ${index + 1}`}
              type="number"
              variant="outlined"
            />
            <Checkbox
              checked={checkedInput.indexOf(index) !== -1}
              onChange={handleToggleChecked(index)}
            />
          </Stack>
        ))}

       
          <ButtonGroup
            data-testid="button-test"
            disabled={checkedInput.length < 2}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleSetOperator("add")}>+</Button>
            <Button onClick={handleSetOperator("multiply")}>*</Button>
            <Button onClick={handleSetOperator("subtract")}>-</Button>
            <Button onClick={handleSetOperator("divide")}>/</Button>
          </ButtonGroup>
          <Typography data-testid="result-test" variant="h6" id="tableTitle" component="div">
            Result : {result}
          </Typography>
      </Stack>
    </>
  );
};

export default App;
