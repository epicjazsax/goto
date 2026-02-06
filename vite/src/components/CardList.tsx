import Card from './Card';
import type EntryInterface from './EntryInterface';

const createCardFor = (entry: EntryInterface) => {
    return (
        <Card
            key={entry.alias}
            alias={entry.alias}
            url={entry.url}
            owner={entry.owner}
        />
    );
}

const CardList = ({ entries }: { entries: EntryInterface[] }) => {
    return (
        <>
            {
                entries.map(entry => createCardFor(entry))
            }
        </>
    );
}

export default CardList;

