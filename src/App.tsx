import { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import qdLogo_dark from './assets/qd_logo_main_dark.png'
// import qdLogo from './assets/qd_logo_main.png'
// import qdLogo1 from './assets/qd-logo1.png'
// import qdLogo3 from './assets/qd-logo3.png'
// import qdLogoGif1 from './assets/logo_anim_play_once.gif'
import {ReleasePackage} from "./components/Packages.ts";

import CardList from './components/CardList'
import ErrorBoundary from './components/ErrorBoundary'
import { filterEntriesByString } from './components/FilteredEntries'
import 'tachyons/css/tachyons.min.css'
import './App.css'

function App() {
    const [searchField, setSearchField] = useState('')
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch('/app-database.json')
            .then(res => res.json())
            .then(data => {
                setEntries(data)

                try {
                    // Read and parse the file
                    // const data = JSON.parse(fileContent);

                    // Validate that it's an array of strings
                    if (!Array.isArray(data)) {
                        throw new Error('JSON content must be an array');
                    }

                    // Map each string to a new instance of the provided class
                    return data.map((item: unknown) => {
                        // if (typeof item !== 'string') {
                        //     throw new Error('All items in the array must be strings');
                        // }
                        return new ReleasePackage(item);
                    });
                } catch (err) {
                    const message = err instanceof Error ? err.message : String(err);
                    throw new Error(`Failed to load or process JSON data": ${message}`);
                }
            })
    }, [])

    const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }


    // ReleasePackages =0;
    //
    // const jsonString = '{"package_name": "VersaLab", "location": "Trantor", "maintainer": "tzakrajsek"}';
    // const pkg: ReleasePackage = new ReleasePackage(JSON.parse(jsonString));
    // console.log(pkg);


    const filteredEntries = filterEntriesByString(entries, searchField)

    return !entries.length ?
        <div>Loading...</div> :
        (
            <>
                <div className="logo-container">
                    <a href="https://qdusa.com/" target="_blank">
                        <img src={qdLogo_dark} className="logo" alt="Quantum Design" />
                    </a>

                    <h1>Release Center</h1>
                </div>
                <h3>
                    <SearchBox searchChange={onSearchFieldChange} />
                    {/* Search Term is: {searchField} */}
                </h3>
                <ErrorBoundary>
                    <CardList entries={filteredEntries} />
                </ErrorBoundary>
            </>
        )
}

export default App

