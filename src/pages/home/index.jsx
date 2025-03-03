import { Box, Card, CardMedia, Stack, Typography, useTheme } from "@mui/material";
import '@fontsource/rajdhani'
import '@fontsource/exo'
import IMG1 from '../../images/2.jpg';
import IMG2 from '../../images/3.jpg';
import IMG3 from '../../images/4.jpg';
import IMG4 from '../../images/5.jpg';
import IMG5 from '../../images/6.jpg';
import IMG6 from '../../images/7.jpg';
import IMG7 from '../../images/8.jpg';
import IMG8 from '../../images/9.jpg';
import IMG9 from '../../images/10.jpg';
import IMG10 from '../../images/11.jpg';
import IMG11 from '../../images/12.jpg';
import IMG12 from '../../images/13.jpg';
import React from "react";
import { Tags } from "./css";
import { Logo } from "../../components/Logo";
import { colors } from "../../colors/colors";
import Timo from '../../images/img.png'
import { Profile } from "../../components/Profile";
export const Home = () => {
    const theme = useTheme();
    const fotos = [
        { id: "0", image: IMG12, description: "Descrição da Foto 0" },
        { id: "1", image: IMG9, description: "Descrição da Foto 1" },
        { id: "2", image: IMG1, description: "Descrição da Foto 2" },
        { id: "3", image: IMG2, description: "Descrição da Foto 3" },
        { id: "4", image: IMG3, description: "Descrição da Foto 4" },
        { id: "5", image: IMG4, description: "Descrição da Foto 5" },
        { id: "6", image: IMG5, description: "Descrição da Foto 6" },
        { id: "7", image: IMG6, description: "Descrição da Foto 7" },
        { id: "8", image: IMG7, description: "Descrição da Foto 8" },
        { id: "9", image: IMG8, description: "Descrição da Foto 9" },
        { id: "10", image: IMG9, description: "Descrição da Foto 10" },
        { id: "11", image: IMG10, description: "Descrição da Foto 11" },
        { id: "12", image: IMG11, description: "Descrição da Foto 12" }
    ]
    return (
        <Tags.containerMain sx={{
        }}>
            <Logo />
            <Profile />
            <Stack sx={{
                display: 'flex',
                padding: '20px 0 20px 0',
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "95%",
                minHeight: "600px",
                height: 'auto'
            }}>
                <Typography variant="h4" sx={{
                    fontFamily: 'sans-serif',
                    fontSize: '20px',
                    fontWeight: '900',
                    color: colors.cyan
                }} gutterBottom>
                    SOBRE MIM
                </Typography>
                <Box
                  sx={{
                    mt: '24px',
                    height: 'auto',
                    display: 'flex', // Layout de acordo com a tela
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: { xs: 1, sm: 2, md: 3 }, // Espaçamento entre os filhos
                    width: '100%', // Garantir que a largura do container seja 100%
                    mx: 'auto', // Centraliza o container horizontalmente
                    borderRadius: 2, // Bordas arredondadas
                  }}
                  
                >
                    {fotos.map((f, index) => (
                        <Card key={index} variant="h6" sx={{
                            margin: '12px 0 12px 0',
                            position: 'relative',
                            maxWidth: 345,
                            boxShadow: `0 4px 10px ${colors.boxShadowTask}`,
                            border: `0.1px solid rgba(23, 162, 184, 0.2)`,

                            '&:hover': {
                                transform: 'translateY(-10px)',
                                 transition: 'ease-out 0.3s',
                                    boxShadow: `
                                rgba(23, 162, 184, 0.4) 0px 5px, 
                                rgba(23, 162, 184, 0.3) 0px 10px, 
                                rgba(23, 162, 184, 0.2) 0px 15px, 
                                rgba(23, 162, 184, 0.1) 0px 20px, 
                                rgba(23, 162, 184, 0.05) 0px 25px
                              `,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            },
                            
                        }}>
                            <CardMedia
                                component="img"
                                alt="Imagem de Exemplo"
                                height="230"
                                width='250'
                                image={f.image}
                                sx={{
                                    borderTopLeftRadius: '4px',
                                    borderTopRightRadius: '4px',
                                }}
                            />
                            {f.description}
                        </Card>
                    ))}

                </Box>

            </Stack>
        </Tags.containerMain>
    )
}