import { Stack, useMediaQuery } from "@mui/material"
import '@fontsource/exo'
import { colors } from "../../colors/colors"
import { LogoCss } from "./css"
import { Menu } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
export const Logo = ({ }) => {
    const location = useLocation()
    const matches = useMediaQuery('(min-width:600px)');
    const links = [
        { name: "HOME", link: "/" },
        { name: "SOBRE MIM", link: "/sobre" },
        { name: "SERVIÇOS", link: "/servicos" },
        { name: "CONTATO", link: "/contato" },
        { name: "ASSINAR", link: "/assinar" }
    ];

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
                    {links.map((item, index) => (
                        <LogoCss.links sx={location.pathname === item.link
                            ? {

                                transition: "ease-out 0.3s",
                                fontSize: 'bold',
                                color: colors.cyan,
                                fontFamily: "Exo, sans-serif",
                                boxShadow: `
                                    rgba(23, 162, 184, 0.4) 0px 5px, 
                                    rgba(23, 162, 184, 0.3) 0px 10px, 
                                    rgba(23, 162, 184, 0.2) 0px 15px, 
                                    rgba(23, 162, 184, 0.1) 0px 20px, 
                                    rgba(23, 162, 184, 0.05) 0px 25px
                                  `,

                            }
                            : {
                                "&:hover":{transition: "ease-out 0.3s",
                                fontSize: 'bold',
                                color: colors.cyan,
                                fontFamily: "Exo, sans-serif",
                                boxShadow: `
                                rgba(23, 162, 184, 0.4) 0px 5px, 
                                rgba(23, 162, 184, 0.3) 0px 10px, 
                                rgba(23, 162, 184, 0.2) 0px 15px, 
                                rgba(23, 162, 184, 0.1) 0px 20px, 
                                rgba(23, 162, 184, 0.05) 0px 25px
                              `,}
                            }} key={index}>{item.name}</LogoCss.links>
                    ))}
                </Stack>
            </>}
        </LogoCss.navbar>
    )
}