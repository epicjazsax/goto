import Entry from './Card';

const CardList = ({ entries }: { entries: Entry[] }) => {
    return (
        <>
            {
                entries.map((entry: Entry) => entry.createCard())
            }
        </>
    );
}

export default CardList;

