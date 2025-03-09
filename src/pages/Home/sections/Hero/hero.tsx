import React from "react";
import { Box, Container, Grid, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../Components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../Components/AnimatedBackground/AnimatedBackground";

const NAVBAR_HEIGHT = 64;

const StyledHero = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: NAVBAR_HEIGHT,
  minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  paddingBottom: theme.spacing(8),
}));

const HeroGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
}));

const AvatarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginBottom: 0,
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  border: `5px solid ${theme.palette.primary.contrastText}`,
  width: "350px",
  [theme.breakpoints.up("lg")]: {
    width: "400px", 
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  flexDirection: "row",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Hero: React.FC = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const titleFontSize = isSmDown ? "2.5rem" : isMdDown ? "3.5rem" : "4.5rem";
  const subTitleFontSize = isSmDown ? "1.6rem" : isMdDown ? "2.2rem" : "3rem";

  return (
    <StyledHero>
      {}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>
        <AnimatedBackground />
      </Box>

      <ContentContainer>
        <HeroGrid container spacing={{ xs: 4, md: 8 }}>
          {}
          <Grid item xs={12} md="auto">
            <AvatarBox>
              <StyledImage src={Avatar} alt="Avatar" />
            </AvatarBox>
          </Grid>

          {}
          <Grid item xs={12} md={6}>
            <TextBox>
              <Typography
                color="primary.contrastText"
                sx={{
                  fontSize: titleFontSize,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Vinicius Lopes
              </Typography>

              <Typography
                color="primary.contrastText"
                sx={{
                  mt: 1,
                  mb: 3,
                  fontSize: subTitleFontSize,
                  lineHeight: 1.3,
                }}
              >
                Computer Engineer Student
              </Typography>

              <ButtonsContainer>
                <StyledButton>
                  <DownloadIcon sx={{ fontSize: "inherit" }} />
                  Download CV
                </StyledButton>
                <StyledButton>
                  <EmailIcon sx={{ fontSize: "inherit" }} />
                  Contact Me
                </StyledButton>
              </ButtonsContainer>
            </TextBox>
          </Grid>
        </HeroGrid>
      </ContentContainer>
    </StyledHero>
  );
};

export default Hero;
