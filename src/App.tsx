import { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import cryoLogo from './assets/snowflake.png'
import qdLogo_dark from './assets/qd_logo_main_dark.png'
import qdLogo from './assets/qd_logo_main.png'
import qdLogo1 from './assets/qd-logo1.png'
import qdLogo3 from './assets/qd-logo3.png'
import qdLogoGif1 from './assets/logo_anim_play_once.gif'


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
            })
    }, [])

    const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }

    const filteredEntries = filterEntriesByString(entries, searchField)

    return !entries.length ?
        <div>Loading...</div> :
        (
            <>
                {/*
                <div className="logo-container">
                    <a href="https://qdusa.com/" target="_blank">
                        <img src={qdLogoGif1} className="logo" alt="Quantum Design" />
                    </a>
                    <a href="https://qdusa.com/" target="_blank">
                        <img src={cryoLogo} className="logo react" alt="Cryo" />
                    </a>
                </div>
                */}

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

