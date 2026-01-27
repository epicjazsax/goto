import type EntryInterface from "./EntryInterface";

export function filterEntriesByString(entries: EntryInterface[], searchField: string): EntryInterface[] {
    return entries.filter(entry => {
        return entry.alias.toLowerCase().includes(searchField.toLowerCase())
            || entry.url.toLowerCase().includes(searchField.toLowerCase())
            || entry.owner.toLowerCase().includes(searchField.toLowerCase())
    })
}

