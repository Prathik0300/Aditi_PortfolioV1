import { Drawer } from "@mui/material";

const HamburgerMenu = ({ open, onClose, children }: any) => {
  return (
    <Drawer
      transitionDuration={300}
      anchor="top"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#000",
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default HamburgerMenu;
