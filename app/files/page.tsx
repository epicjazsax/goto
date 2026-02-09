'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import ErrorBoundary from '@components/error-boundary'
import MultiStringSearchBox from '@components/multi-search-box'

export default function Home() {

    const [searchFieldStrings, setSearchFieldStrings] = useState<string[]>([])
    const [searchFieldCurrent, setSearchFieldCurrent] = useState<string>('');
    const [excludeFieldStrings, setExcludeFieldStrings] = useState<string[]>(['finaltest', 'atl'])
    const [excludeFieldCurrent, setExcludeFieldCurrent] = useState<string>('');
    const [files, setFiles] = useState<string[]>([])

    // const [strings, setStrings] = useState<string[]>([]);
    // const [currentInput, setCurrentInput] = useState<string>('');

    useEffect(() => {
        fetch('/app-database.json')
            .then(res => res.json())
            .then(data => {

                try {
                    setFiles(data);
                } catch (err) {
                    const message = err instanceof Error ? err.message : String(err);
                    throw new Error(`Failed to load or process JSON data": ${message}`);
                }
            })
    }, [])

    // const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setSearchField(event.target.value);
    // }

    // const onExcludeFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setExcludeField(event.target.value);
    // }

    // const includedFiles = files.filter(f => f.toLowerCase().includes(searchField.toLowerCase()));
    // const filteredFiles = includedFiles.filter(f => !excludeField || !f.toLowerCase().includes(excludeField.toLowerCase()));

    const includedFiles = files.filter(file => {
        const lower = file.toLowerCase();
        return (
            searchFieldStrings.every(t => lower.includes(t))
            && lower.includes(searchFieldCurrent.toLowerCase())
        );
    });

    // const filteredFiles = includedFiles;

    const filteredFiles = includedFiles.filter(file => {
        const lower = file.toLowerCase();
        return (
            // true
            (excludeFieldStrings ? excludeFieldStrings.every(t => !lower.includes(t)) : true) &&
            (excludeFieldCurrent ? !lower.includes(excludeFieldCurrent.toLowerCase()) : true)
        );
    });

    // function* filterTake<T>(
    //   arr: T[],
    //   predicate: (item: T, index: number) => boolean,
    //   limit = 10
    // ) {
    //   let count = 0;
    //   for (let i = 0; i < arr.length && count < limit; i++) {
    //     if (predicate(arr[i], i)) {
    //       yield arr[i];
    //       count++;
    //     }
    //   }
    // }

    // const filteredFiles = [...filterTake(includedFiles, file => {
    //   const lower = file.toLowerCase();
    //   return (
    //     // true
    //     (excludeFieldStrings ? excludeFieldStrings.every(t => !lower.includes(t)) : true) &&
    //     (excludeFieldCurrent ? !lower.includes(excludeFieldCurrent.toLowerCase()) : true)
    //   );
    // }, 10)];  // first10


    // console.log(includedFiles.length)
    // console.log(filteredFiles.length)
    //
    //
    const maxVisibleEntries = 100;

    return (
        <>
            <div className="font-sans">
                <main className="flex w-full max-w-8xl flex-col py-16 px-16 items-start">

                    <div className="flex items-start min-w-full p-6">
                        <div className="flex w-1/3">
                            <MultiStringSearchBox
                                strings={searchFieldStrings}
                                setStrings={setSearchFieldStrings}
                                currentInput={searchFieldCurrent}
                                setCurrentInput={setSearchFieldCurrent}
                                label_override='Include'
                                activation_key_override='/'
                                // placeholder_override={`Press '${'/'}' to activate`}
                                placeholder_override={`Find term(s) ↵`}
                            />
                        </div>
                        <div className="flex flex-col items-center w-1/3">
                            {/*
              <h2>Total Files: {files.length.toLocaleString('en-US')}</h2>
              <h2>Selected: {filteredFiles.length.toLocaleString('en-US')}</h2>
              <h2>Filtered out: {(files.length - filteredFiles.length).toLocaleString('en-US')}</h2>
            */}
                        </div>
                        <div className="flex w-1/3">
                            <MultiStringSearchBox
                                strings={excludeFieldStrings}
                                setStrings={setExcludeFieldStrings}
                                currentInput={excludeFieldCurrent}
                                setCurrentInput={setExcludeFieldCurrent}
                                label_override='Exclude'
                                activation_key_override='-'
                                // placeholder_override={`Press '${'-'}' to activate`}
                                placeholder_override={`Exclude terms ↵`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mx-auto max-w-2/3 mt-4">
                        <ErrorBoundary>

                            <div className="flex flex-row">
                                <div className="m-2 p-2">
                                    {filteredFiles.length === files.length ?
                                        <div>All {files.length.toLocaleString('en-US')} files selected</div> :
                                        <div>{filteredFiles.length.toLocaleString('en-US')} of {files.length.toLocaleString('en-US')} files selected</div>
                                    }
                                </div>
                                <div className="flex-1"></div>
                                <div className="m-2 p-2">
                                    {filteredFiles.length > maxVisibleEntries ?
                                        <div>First {maxVisibleEntries.toLocaleString('en-US')} files shown</div> :
                                        <div>All {filteredFiles.length.toLocaleString('en-US')} selected files shown</div>
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col text-xs text-gray-400">
                                {filteredFiles.length &&
                                    filteredFiles.slice(0, maxVisibleEntries).map((f) => (
                                        <Link key={f} href={`/api/download/${f}`}>
                                            <div className="border border-gray-600 m-2 p-2 rounded-xl text-sm text-left dark:hover:text-teal-400 hover:text-red">
                                                {/* <div className="text-sm text-left hover:text-teal-400"> */}
                                                {f}
                                            </div>
                                        </Link>
                                    )) ||
                                    <ul>
                                        {filteredFiles.map((f) => (
                                            <li>{f}</li>
                                        ))
                                        }
                                    </ul>
                                }
                            </div>
                        </ErrorBoundary>
                    </div>
                    <div> </div>
                </main >
            </div >
        </>
    );
}

