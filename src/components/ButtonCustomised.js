import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

export function ButtonCustomised({ name, color, btn_type, handleDelete }) {
  const [isTrue, setIsTrue] = useState(true);
  return (
    // <Button
    //   type={btn_type}
    //   variant="contained"
    //   color={color}
    //   onClick={(e) => handleDelete(e.id)}
    // >
    //   {name}
    // </Button>
    // <div>{isTrue ? <p>Hell</p> : <p>dd</p>}</div>

    <div>
      {name === "DELETE" ? (
        <Button
          type={btn_type}
          variant="contained"
          color={color}
          onClick={(e) => handleDelete(e.id)}
        >
          {name}
        </Button>
      ) : (
        <Button type={btn_type} variant="contained" color={color}>
          {name}
        </Button>
      )}
    </div>
  );
}
