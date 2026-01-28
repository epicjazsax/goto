import { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardList from './components/CardList'
import ErrorBoundary from './components/ErrorBoundary'
import { filterEntriesByString } from './components/FilteredEntries'
import type EntryInterface from './components/EntryInterface'
import './App.css'

function App() {
    const [searchField, setSearchField] = useState('')
    const [entries, setEntries] = useState<EntryInterface[]>([])

    useEffect(() => {
        fetch('/goto-database.json')
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
                <div className='bg-blue-800 border border-white inline-flex'>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1 className='bg-yellow-800 border border-white my-4 py-4'>
                    Go-To Manager
                </h1>
                <h3 className='border border-white m-3 p-3'>
                    <SearchBox searchChange={onSearchFieldChange} />
                    <div className='bg-red-800 border border-white m-1 p-1'>
                        Search Term is: {searchField}
                    </div>
                </h3>
                <ErrorBoundary>
                    <div className='border border-white m-3 p-3'>
                        <CardList entries={filteredEntries} />
                    </div>
                </ErrorBoundary>
            </>
        )
}

export default App

