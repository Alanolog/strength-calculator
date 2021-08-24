import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = [
  "Kalkulator maksymalnego ciężaru",
  "kalkulator BMR",
  "kalkulator FFMI",
  "Ostatnie wyniki",
];

const ITEM_HEIGHT = 48;

export default function LongMenu({ currentElement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ float: "left", width: "50%" }}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 300,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={(e) => {
              currentElement(e.target.value);
              handleClose();
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
