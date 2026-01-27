export function filterEntriesByString(entries: { alias: string; url: string; owner: string }, searchField: string): object[] {
    return entries.filter(entry => {
        return entry.alias.toLowerCase().includes(searchField.toLowerCase())
            || entry.url.toLowerCase().includes(searchField.toLowerCase())
            || entry.owner.toLowerCase().includes(searchField.toLowerCase())
    })
}

