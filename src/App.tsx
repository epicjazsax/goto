import { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import { type ReleasePackage } from "./components/ReleasePackage";
import CardList from './components/CardList'
import ErrorBoundary from './components/ErrorBoundary'
import { filterPackagesByString } from './components/Filter'

import qdLogo_dark from './assets/qd_logo_main_dark.png'
import 'tachyons/css/tachyons.min.css'
import './App.css'

import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleSwitch from './components/ToggleSwitch';

// import { alpha, styled } from '@mui/material/styles';
// import { green, blue, red } from '@mui/material/colors';

// color: green[600],
// backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
// backgroundColor: red[600],
// color: red[600],
// color: blue[600],

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    // Color of the thumb when unchecked
                    color: 'gray', // e.g., for unchecked thumb
                },
                track: {
                    // Background color of the track when unchecked
                    backgroundColor: 'gray',
                    opacity: 0.5,
                },
                colorPrimary: {
                    '&.Mui-checked': {
                        // Checked state styles (optional)
                        color: '#336699',
                    },
                },
            },
        },
    },
});

function App() {
    const [searchField, setSearchField] = useState('')
    const [packages, setPackages] = useState<ReleasePackage[]>([])
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        fetch('/app-database.json')
            .then(res => res.json())
            .then(data => {

                try {
                    // Validate that it's an array of strings
                    if (!Array.isArray(data)) {
                        throw new Error('JSON content must be an array');
                    }

                    // Map each entry to a new ReleasePackage instance
                    setPackages(
                        data.map((item: ReleasePackage) => {
                            // console.log("pkg:", typeof item);
                            return item;
                        })
                    );
                } catch (err) {
                    const message = err instanceof Error ? err.message : String(err);
                    throw new Error(`Failed to load or process JSON data": ${message}`);
                }
            })
    }, [])

    const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }

    const filteredPackages = filterPackagesByString(packages, searchField)

    return !packages.length ?
        <div>Loading...</div> :
        (
            <>
                <div className="logo-container">
                    <a href="https://qdusa.com/" target="_blank">
                        <img src={qdLogo_dark} className="logo" alt="Quantum Design" />
                    </a>

                    <h1>Release Center</h1>
                    <span className="mt4">
                        <FormGroup>
                            <FormControlLabel control={
                                <ToggleSwitch
                                    theme={theme}
                                    checked={checked}
                                    onChange={handleChange} />
                            } label="Show Details" />
                        </FormGroup>
                    </span>

                </div>
                <h3>
                    <SearchBox searchChange={onSearchFieldChange} />
                </h3>
                <ErrorBoundary>
                    <CardList pkgs={filteredPackages} showJson={checked} />
                </ErrorBoundary>
            </>
        )
}

export default App

