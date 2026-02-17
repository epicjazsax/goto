import Card from '@components/Card';
import { type EntryInterface } from '@utils/EntryInterface';

interface CardListProps {
    entries: Record<string, EntryInterface>;
    showJson?: boolean;
}

const CardList = ({ entries, showJson }: CardListProps) => {
    const sortedPackages = Object.values(entries).sort((a, b) => {
        return a.alias.localeCompare(b.alias);
    });

    return (
        <div className="flex flex-wrap justify-center gap-4 w-full py-16 px-4 sm:px-8 md:px-16 lg:px-16">
            {sortedPackages.map((entry) => (
                <Card
                    key={entry.alias}
                    entry={entry}
                    showJson={showJson}
                />
            ))}
        </div>
    );
};

export default CardList;

