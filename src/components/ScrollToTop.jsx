import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp as UpIcon } from "@mui/icons-material";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          boxShadow: 3,
        }}
      >
        <UpIcon />
      </Fab>
    </Zoom>
  );
}
