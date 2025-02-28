import { Stack } from "@mui/material";
import React from "react";
import { Tags } from "./css";
import { colors } from "../../colors/colors";

export const Home = () => {
    return (
        <Tags.stack>
            <Tags.navbar>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    ml: '20px',
                    width: '30%',
                    height: '90%',
                    fontSize: { xs: "1.1rem", md: "1.5rem" },
                    fontWeight: "900",
                    fontFamily: "'Orbitron', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    lineHeight: '1.4'
            
                }}>
                    {['T', 'I', 'M', 'O', 'F', 'I', 'C', 'I', 'A', 'L'].map((key, index) => (
                        <Tags.strongtag sx={key === 'T'? {
                            color: 'white',
                            bgcolor: colors.text.secondary,
                            height: '60%',
                            padding: '4px',
                            border: 'none'
                        }:{}} key={index}>{key}</Tags.strongtag>
                    ))}
                </Stack>
                <Stack>HOME</Stack>
                <Stack>SOBRE MIM </Stack>
                <Stack>SERVIÇOS</Stack>
                <Stack>CONTATO </Stack>
                <Stack>ASSINAR</Stack>
            </Tags.navbar>
        </Tags.stack>
    )
}