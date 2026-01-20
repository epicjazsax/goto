import Card from './Card';

const createCardFor = (entry: { alias: string; url: string; owner: string }) => {
    return (
        <Card
            key={entry.package_name}
            package_name={entry.package_name}
            location={entry.location}
            maintainer={entry.maintainer}
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

