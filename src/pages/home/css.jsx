import { Box, Stack, styled } from "@mui/material";
import { colors } from "../../colors/colors";
export const Tags = {
    containerMain: styled(Box)(({ }) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100vw', // Ajuste para garantir que o container ocupe toda a largura disponível
        minHeight: '100vh',
        height: 'auto',
        overflowX: 'hidden', // Garante que não tenha scroll horizontal
        ...colors.scrollBar
    })),
}