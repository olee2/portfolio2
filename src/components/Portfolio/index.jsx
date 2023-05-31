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
    h1: { fontFamily: "Merriweather, sans-serif" },
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
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Oscar
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              align="start"
              color="text.primary"
              gutterBottom
            >
              Oscar's Portfolio
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
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container maxWidth={"md"}>
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
          maxWidth="md"
        >
          <Typography
            component="h2"
            variant="h4"
            align="start"
            color="text.primary"
            gutterBottom
            alignSelf={"flex-start"}
          >
            Weaving the Web, One Project at a Time
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((data, i) => (
              <Grid item key={i} xs={12} sm={12} md={12}>
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
                    <Typography gutterBottom variant="h5" component="h3">
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
      {/* Footer */}
      <Container maxWidth={"md"} color={defaultTheme.palette.primary.main}>
        <Divider />
      </Container>
      <Box sx={{ bgcolor: "background.paper", p: 3 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
