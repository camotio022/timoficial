import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Tags } from "./css";
import { Logo } from "../../components/Logo";
import { colors } from "../../colors/colors";
import Timo from '../../images/img.png'
export const Home = () => {
    const theme = useTheme();
    return (
        <Tags.containerMain>
            <Logo />
            <Stack
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: "150px",
                    width: "100%",
                    minHeight: "700px",
                }}
            >
                <Stack
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: "20px", sm: "50px", md: "100px" },
                        width: "95%",
                        height: "auto",
                    }}
                >
                    <Stack
                        sx={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            height: "100%",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Temóteo Luís Bernardo
                        </Typography>
                        <Typography variant="h6">
                            Hoje, Timóteo está cursando Análise de Sistemas, onde combina suas habilidades técnicas com sua criatividade.
                            Seu projeto mais ousado, MetaLife, uma rede social futurista, reflete sua visão inovadora para o digital.
                            E, claro, entre códigos e telas, ainda encontra tempo para a dança, seu amor por filmes e até um possível romance florescendo.
                        </Typography>
                        <Stack sx={{
                            mt: 1,
                            width: '100px',
                            height: '30px',
                            bgcolor: colors.cyan,
                            color: colors.light,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px'
                        }}>
                            Ver mais...
                        </Stack>
                        <Stack sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            mt: '30px',
                            gap: '30px',
                            // borderBottom: `1px solid ${colors.cyan}`
                        }}>
                    
                            <Stack>
                                Facebook
                            </Stack>
                            <Stack>
                                Instagram
                            </Stack>
                            <Stack>
                                TikTok
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            width: { xs: "250px", sm: "300px", md: "400px" },
                            height: { xs: "250px", sm: "300px", md: "400px" },
                            borderRadius: "50%",
                            boxShadow: theme.palette.mode === "dark" ? "0px 0px 20px cyan" : "0px 0px 20px lightblue",
                        }}
                    >
                        <img
                            style={{
                                width: 'auto',
                                height: '100%',
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                            src={Timo}
                            alt="Timóteo"
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Tags.containerMain>
    )
}