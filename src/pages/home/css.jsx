import { Stack, styled } from "@mui/material";
import { colors } from "../../colors/colors";


export const Tags = {
    stack: styled(Stack)(({ }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        backgroundColor: colors.background.primary
    })),
}