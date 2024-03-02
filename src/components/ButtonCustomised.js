import * as React from "react";
import Button from "@mui/material/Button";
export function ButtonCustomised({ name, color, btn_type, handleDelete }) {
  return (
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
