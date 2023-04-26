import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{
        width: "100%",
        maxWidth: 360,
        boxShadow: 1,
        background: deepPurple[900],
        borderRadius: 1,
      }}
    >
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
                sx={{
                  color: deepPurple[50],
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar></ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
