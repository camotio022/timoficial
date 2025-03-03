import { Stack, Typography, useTheme } from "@mui/material";
import '@fontsource/rajdhani'
import '@fontsource/exo'
import React from "react";
import Timo from '../../images/img.png'
import { colors } from "../../colors/colors";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
export const Profile = ({ }) => {
    const theme = useTheme();
    const strog = {
        color: colors.cyan
    }
    const midias = [
        {
            name: 'Facebook',
            icon: <Facebook/>
        }, {
            name: 'Instagram',
            icon: <Instagram/>
        }, ,{
            name: 'Whatsapp',
            icon: <WhatsApp/>
        }
    ]
    return (
        <Stack
            sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "250px",
                padding: '0 0 20px 0',
                width: "95%",
                minHeight: "600px",
            }}
        >
            <Stack
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: "20px", sm: "50px", md: "100px" },
                    width: "100%",
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
                    <Typography variant="h4" sx={{
                        fontFamily: ' sans-serif',
                        fontSize: '50px'
                    }} gutterBottom>
                        Temóteo Luís Bernardo
                    </Typography>
                    <Typography variant="h5" sx={{
                        fontFamily: ' sans-serif'
                    }}>
                        Sou um jovem de 24 anos, natural de Moçambique, atualmente vivendo no Brasil e construindo meu futuro com dedicação e esforço.
                        Sempre acreditei que os desafios da vida são degraus para o sucesso, e por isso nunca deixo de sonhar alto. <strong style={strog}>Programador Front-End</strong>, apaixonado por tecnologia, amo transformar ideias em realidade digital.
                        Além disso, sou fascinado por música, criando conexões através das batidas e melodias.
                        Nas redes sociais, compartilho minha jornada com autenticidade, mostrando os desafios, conquistas e, claro, muita diversão e risadas. Acredito no poder da persistência e na importância de inspirar outras pessoas a nunca desistirem.
                    </Typography>

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
                        {midias.map((i, index) => (

                            <Stack sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection:'row',
                                gap: '8px',
                                minWidth: '100px',
                                padding: '2px',
                                height: '30px',
                                color: colors.cyan,
                                cursor: 'pointer',
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                                "&:hover": {
                                    transition: 'ease-out 0.3s',
                                    backgroundColor: colors.cyan,
                                    color: colors.light,
                                    fontFamily: 'exo, sans-serif',
                                    boxShadow: `
                                rgba(23, 162, 184, 0.4) 0px 5px, 
                                rgba(23, 162, 184, 0.3) 0px 10px, 
                                rgba(23, 162, 184, 0.2) 0px 15px, 
                                rgba(23, 162, 184, 0.1) 0px 20px, 
                                rgba(23, 162, 184, 0.05) 0px 25px
                              `
                                },
                            }} key={index}>
                                {i.name}{i.icon}
                            </Stack>
                        ))}
                    </Stack>
                </Stack>

                <Stack
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: { xs: "250px", sm: "300px", md: "400px" },
                        height: { xs: "250px", sm: "300px", md: "400px" },
                        boxShadow: theme.palette.mode === "dark" ? "0px 0px 20px cyan" : "0px 0px 20px lightblue",
                    }}
                >
                    <img
                        style={{
                            width: 'auto',
                            height: '120%',
                            objectFit: "cover",
                        }}
                        src={Timo}
                        alt="Timóteo"
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}