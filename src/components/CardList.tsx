import Card from './Card';

const createCardFor = (entry: { alias: string; url: string; owner: string }) => {
    return (
        <Card
            key={entry.alias}
            alias={entry.alias}
            url={entry.url}
            owner={entry.owner}
        />
    );
}

const CardList = ({ entries }) => {
    return (
        <>
            {
                entries.map(entry => createCardFor(entry))
            }
        </>
    );
}

export default CardList;

