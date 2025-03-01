import { Stack, styled } from "@mui/material";
import { colors } from "../../colors/colors";
import { Link } from "react-router-dom";


export const LogoCss = {

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
        color: colors.cyan,
    })),
    taglogo: styled(Stack)(({ }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '20px',
        width: '30%',
        height: '90%',
        fontSize: { xs: "1.1rem", md: "1.5rem" },
        fontWeight: "900",
        fontFamily: "'Orbitron', sans-serif",
        textTransform: "uppercase",
        letterSpacing: "2px",
        lineHeight: '1.4'
    })),
    strongtag: styled(Stack)(({ }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1px',
        lineHeight: '1.4',
        borderBottom: `3px solid ${colors.text.secondary}`
    })),
    links: styled(Link)(({ }) => ({
        textDecoration: "none",
        color: colors.cyan,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
    }))

}