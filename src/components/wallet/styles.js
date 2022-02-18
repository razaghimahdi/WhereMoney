import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "6rem",
    paddingLeft: "2rem",
    gap: "1rem",
  },
  bold: {
    fontWeight: "bold",
  },
  headerIcon: {
    paddingRight: ".2rem",
    fontSize:'2.2rem',
    [theme.breakpoints.down("md")]:{
      fontSize:'1.5rem'
    }
  },
  cardIcon1: {
    color: "#0CC6FF",
    backgroundColor: "#E5F8FF",
    padding: "1rem",
    boxSizing: "content-box",
    borderRadius: "50%",
    fontSize: "2rem",
  },
  cardIcon2: {
    color: "#FF0909",
    backgroundColor: "#FFE5E5",
    padding: "1rem",
    borderRadius: "50%",
    fontSize: "2rem",
    boxSizing: "content-box",
  },
  padding: {
    paddingBottom: theme.spacing(10),
  },
}));
