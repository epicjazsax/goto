import { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'tachyons'
import './App.css'
import CardList from './components/CardList'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    const [searchField, setSearchField] = useState('')
    const [entries, setEntries] = useState({})

    useEffect(() => {
        fetch('/goto-database.json')
            .then(res => res.json())
            .then(data => {
                setEntries(data)
            })
    }, [])

    const onSearchFieldChange = (event) => {
        setSearchField(event.target.value);
    }

    return !entries.length ?
        <div>Loading...</div> :
        (
            <>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Go-To Manager</h1>
                <h3>
                    <SearchBox searchChange={onSearchFieldChange} />
                    Search Term is: {searchField}
                </h3>
                <ErrorBoundary>
                    <CardList entries={entries} />
                </ErrorBoundary>
            </>
        )
}

export default App

