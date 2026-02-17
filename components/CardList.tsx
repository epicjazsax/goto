import Card from '@components/Card';
import { type EntryInterface } from '@utils/EntryInterface';

interface CardListProps {
    pkgs: Record<string, EntryInterface>;
    showJson?: boolean;
}

const CardList = ({ pkgs, showJson }: CardListProps) => {
    const sortedPackages = Object.values(pkgs).sort((a, b) => {
        const aIsInstrument = a.tags?.includes("instrument") ?? false;
        const bIsInstrument = b.tags?.includes("instrument") ?? false;

        if (aIsInstrument !== bIsInstrument) {
            // If a is an instrument and b isn't, a comes first (-1)
            return aIsInstrument ? -1 : 1;
        }

        return a.alias.localeCompare(b.alias);
    });

    return (
        <div className="flex flex-wrap justify-center gap-4 w-full py-16 px-4 sm:px-8 md:px-16 lg:px-16">
            {sortedPackages.map((pkg) => (
                <Card
                    key={pkg.alias}
                    pkg={pkg}
                    showJson={showJson}
                />
            ))}
        </div>
    );
};

export default CardList;

