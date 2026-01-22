import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type ChangeEvent } from 'react';

interface ToggleSwitchProps {
    theme: Theme;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ theme, checked, onChange }) => {
    return (
        <ThemeProvider theme={theme}>
            <Switch
                checked={checked}
                onChange={onChange}
                slotProps={{ input: { 'aria-label': 'controlled' } }}
            />
        </ThemeProvider>
    );
};

export default ToggleSwitch;
