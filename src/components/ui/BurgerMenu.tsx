import { useThemeStore } from "@/store/useThemeButton";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";
import BurgerButton from "./SvgUi/BurgerSvg";
import { menuLinks } from "@/constants/links";

const BurgerMenu = () => {
  const { theme } = useThemeStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={twMerge(
        `flex items-center justify-between h-[50px] w-[140px] rounded-full pl-4  pr-1 font-bold text-xl cursor-pointer`,
        "bg-[var(--bg-color)] text-[var(--text-color)]"
      )}
    >
      Menu
      <div className="w-[45px] h-[45px] rounded-full bg-[#ffc107]">
        <IconButton
          className="w-full h-full flex items-center justify-center"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <BurgerButton isOpen={open} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                backgroundColor: theme === "light" ? "white" : "#212121",
                color: theme === "light" ? "black" : "white",
                paddingInline: "10px",
                width: "230px",
                mt: 1.5,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {menuLinks.map((links, index) => (
            <MenuItem
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
                  color: theme === "light" ? "black" : "white",
                  outline: "2px solid #ffc107",
                  borderRadius: "4px",
                },
              }}
            >
              {links.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default BurgerMenu;
