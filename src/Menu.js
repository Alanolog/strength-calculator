import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function LongMenu({ setCurrOption }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const options = [
    "Kalkulator maksymalnego ciężaru",
    "Kalkulator BMR",
    "Kalkulator FFMI",
    "Ostatnie wyniki",
  ];
  function currentElement(option, setCurrOption) {
    if (option === "Kalkulator maksymalnego ciężaru") {
      setCurrOption("OneRepMaxCalc");
    } else if (option === "Kalkulator BMR") {
      setCurrOption("BMRCalc");
    } else if (option === "Kalkulator FFMI") {
      setCurrOption("FFMICalc");
    } else if (option === "Ostatnie wyniki") {
      setCurrOption("ResultsTracker");
    }
  }
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
              currentElement(e.target.innerText, setCurrOption);
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
