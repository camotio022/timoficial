import { Stack, useMediaQuery } from "@mui/material"
import { colors } from "../../colors/colors"
import { LogoCss } from "./css"
import { Menu } from "@mui/icons-material";

export const Logo = ({ }) => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <LogoCss.navbar>

            <LogoCss.taglogo>
                {['T', 'I', 'M', 'O', 't', 'I', 'O', 'L', 'U', 'I', 'S'].map((key, index) => (
                    <LogoCss.strongtag sx={key === 'T' ? {
                        color: 'white',
                        bgcolor: colors.text.secondary,
                        height: '60%',
                        padding: '4px',
                        border: 'none'
                    } : {}} key={index}>{key}</LogoCss.strongtag>
                ))}
            </LogoCss.taglogo>

            {!matches ? <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                marginRight: '20px'
            }}>
                <Menu style={{
                    fontSize: '30px',
                    cursor: 'pointer'
                }} />
            </Stack> : <>
                <Stack sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: '20px',
                    height: '90%',
                    width: '70%',
                    gap: '10px',
                }}>
                    <LogoCss.links>HOME</LogoCss.links>
                    <LogoCss.links>SOBRE MIM </LogoCss.links>
                    <LogoCss.links>SERVIÇOS</LogoCss.links>
                    <LogoCss.links>CONTATO </LogoCss.links>
                    <LogoCss.links>ASSINAR</LogoCss.links>
                </Stack>
            </>}
        </LogoCss.navbar>
    )
}