import { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import { type ReleasePackage } from "./components/ReleasePackage";
import CardList from './components/CardList'
import ErrorBoundary from './components/ErrorBoundary'
import { filterPackagesByString } from './components/Filter'

import qdLogo_dark from './assets/qd_logo_main_dark.png'
import 'tachyons/css/tachyons.min.css'
import './App.css'


function App() {
    const [searchField, setSearchField] = useState('')
    const [packages, setPackages] = useState<ReleasePackage[]>([])

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
                </div>
                <h3>
                    <SearchBox searchChange={onSearchFieldChange} />
                    {/* Search Term is: {searchField} */}
                </h3>
                <ErrorBoundary>
                    {
                        //console.log("Filtered Packages:", filteredPackages)
                    }
                    <CardList pkgs={filteredPackages} />

                </ErrorBoundary>
            </>
        )
}

export default App

