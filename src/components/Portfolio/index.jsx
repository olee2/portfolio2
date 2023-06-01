import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { Link } from "@mui/material";
import git from "../../assets/github.svg";
import linked from "../../assets/linkedIn.svg";
import FormDialog from "../FormDialog";

import { data } from "../../data";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Oscar Elny {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    secondFontFamily: "Merriweather, serif",
  },

  palette: {
    text: { primary: "#39577b" },
    primary: {
      main: "#39577b",
    },
    secondary: {
      main: "#7a553e",
    },
  },
});

export default function Portfolio() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Oscar's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              fontFamily={defaultTheme.typography.secondFontFamily}
              variant="h3"
              align="start"
              color="text.primary"
              gutterBottom
            >
              Hi, I'm Oscar
            </Typography>
            <Typography
              variant="h6"
              align="start"
              color="text.secondary"
              paragraph
            >
              I'm a front-end developer with a knack for turning coffee into
              code. Proficient in HTML, CSS, JavaScript, and React, I create
              pixel-perfect web experiences.
            </Typography>
            <Typography
              variant="h6"
              align="start"
              color="text.secondary"
              paragraph
            >
              Together, let's build something that'll make users forget to
              blink!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleClickOpen}>
                Get in Touch
              </Button>
              <FormDialog open={open} handleClose={handleClose} />
            </Stack>
          </Container>
        </Box>
        <Container maxWidth={"lg"}>
          <Divider />
        </Container>
        <Container
          sx={{
            py: 8,
            flex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
          maxWidth="lg"
        >
          <Typography
            component="h2"
            variant="h4"
            align="start"
            color="text.primary"
            gutterBottom
            alignSelf={"flex-start"}
            fontFamily={defaultTheme.typography.secondFontFamily}
          >
            Weaving the Web, One Project at a Time
          </Typography>

          <Grid container spacing={4}>
            {data.map((data, i) => (
              <Grid item key={i} xs={12} sm={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "56.25%",
                      backgroundSize: "cover",
                      borderBottom: "1px solid #f1f1f1",
                    }}
                    image={data.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      fontFamily={defaultTheme.typography.secondFontFamily}
                    >
                      {data.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" href={data.site_url} size="small">
                      Live Site
                    </Button>
                    <Button color="secondary" href={data.git_url} size="small">
                      Github
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Container maxWidth={"lg"} color={defaultTheme.palette.primary.main}>
        <Divider />
      </Container>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
        component="footer"
      >
        <Box display={"flex"} gap={2}>
          <Link href="https://www.linkedin.com/in/ole-andr%C3%A9-eikrem-1b0752202/">
            <img src={linked} alt="" />
          </Link>
          <Link href="https://github.com/olee2">
            <img src={git} alt="" />
          </Link>
        </Box>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
