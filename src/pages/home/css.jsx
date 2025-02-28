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
    navbar: styled(Stack)(({ }) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100px',
        color: colors.text.title,
    })),
    strongtag: styled(Stack)(({ }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1px',
        lineHeight: '1.4',
        borderBottom:`3px solid ${colors.text.secondary}` 
    }))
}