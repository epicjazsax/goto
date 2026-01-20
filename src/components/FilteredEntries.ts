export function filterEntriesByString(entries: { package_name: string; location: string; maintainer: string }, searchField: string): object[] {
    // console.log(`Filtering ${entries.length} entries with search term: ${searchField}`);
    return entries.filter(entry => {
        // console.log(`Checking entry: ${JSON.stringify(entry)}`);
        return (typeof entry.package_name !== 'undefined' && entry.package_name.toLowerCase().includes(searchField.toLowerCase()))
            || (typeof entry.location !== 'undefined' && entry.location.toLowerCase().includes(searchField.toLowerCase()))
            || (typeof entry.maintainer !== 'undefined' && entry.maintainer.toLowerCase().includes(searchField.toLowerCase()))
    })
}

