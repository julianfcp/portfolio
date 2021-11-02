import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const UpperBox = styled(Container)(({ theme }) => ({
  height: theme.spacing(1),
  maxWidth: "100% !important",
  backgroundColor: theme.palette.common.buttons,
  margin: theme.spacing(0),
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  height: "600px",
  padding: theme.spacing(9),
  justifyContent: "center",
  backgroundColor: theme.palette.common.backgroundHeader,
}));

const GridAvatar = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const GridResume = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const PaperResume = styled(Paper)(({ theme }) => ({
  height: "100%",
  width: "80%",
  textAlign: "justify",
  padding: theme.spacing(3),
}));

const ContactButton = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.buttons,
  width: "120px",
  height: "38px",
  textAlign: "center",
  paddingTop: "6px",
  borderRadius: ".25rem",
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <UpperBox></UpperBox>
      <GridContainer container spacing={0}>
        <GridAvatar item xs={12} md={4}>
          <Avatar
            alt="Julian Cortes"
            src="/images/profile.png"
            sx={{ width: 200, height: 200 }}
            component={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
            }}
          />
        </GridAvatar>
        <GridResume item xs={12} md={8}>
          <PaperResume
            elevation={0}
            component={motion.div}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography variant="h2" gutterBottom component="div">
              Julian Cortes
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              color="text.secondary"
              component="div"
            >
              IT Analyst and Web Developer
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
              Electronic Engineer from the Javeriana University, with experience
              in information technology in all stages of the software
              development cycle, modeling and automation of BPM processes and
              data analysis. Technically competent with a constant professional
              updating, using the most up-to-date programming bases. Proactively
              adopting numerous programming languages, libraries and frameworks
              such as JavaScript, Java, Html, CSS, Node Js, Express, ReactJs,
              Angular, mySQL and MongoDB. Strong communication skills, teamwork,
              and project management experience to build client relationships.
            </Typography>
            <ContactButton>
              <Typography
                variant="body2"
                gutterBottom
                color="text.common.white"
              >
                <Icon>mail</Icon>
                <strong>Contact Me</strong>
              </Typography>
            </ContactButton>
          </PaperResume>
        </GridResume>
      </GridContainer>
    </Box>
  );
};

export default Header;
