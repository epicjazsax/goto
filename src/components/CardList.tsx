import Card from './Card';

interface Entry {
    package_name: string;
    location: string;
    maintainer: string;
}

interface CardListProps {
    entries: Entry[];
}

const createCardFor = (entry: Entry) => {
    return (
        <Card
            key={entry.package_name}
            package_name={entry.package_name}
            location={entry.location}
            maintainer={entry.maintainer}
        />
    );
}

const CardList = ({ entries }: CardListProps) => {
    return (
        <>
            {
                entries.map(entry => createCardFor(entry))
            }
        </>
    );
}

export default CardList;

