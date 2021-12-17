import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import router from "next/router";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:hidden">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="h-8 ml-3 text-black curser-pointer" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          {/* Hem */}
          <ListItemIcon>
            <HomeIcon
              onClick={() => router.push("/")}
              className="navBtn flex text-black"
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText>Hem</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          {/* Airplane */}
          <ListItemIcon>
            <PaperAirplaneIcon
              onClick={() => router.push("inbox")}
              className="navBtn rotate-45 flex text-black"
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText>Meddelanden</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          {/* Group */}
          <ListItemIcon>
            <UserGroupIcon
              className="navBtn flex text-black"
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText>Vänner</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          {/* Likes */}
          <ListItemIcon>
            <HeartIcon className="navBtn flex text-black" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Likes</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
