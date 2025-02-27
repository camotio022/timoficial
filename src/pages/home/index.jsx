import { Stack } from "@mui/material";
import React from "react";
import { Tags } from "./css";
import { colors } from "../../colors/colors";

export const Home = () => {
    return (
        <Tags.stack>
            <Stack sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '60px',
                backgroundColor: colors.background.overlay
            }}>

            </Stack>

        </Tags.stack>
    )
}