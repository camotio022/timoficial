import { Stack, styled } from "@mui/material";
import { colors } from "../../colors/colors";

export const Tags = {
    containerMain: styled(Stack)(({ }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        backgroundColor: colors.background.primary,
        ...colors.scrollBar
    })),
}