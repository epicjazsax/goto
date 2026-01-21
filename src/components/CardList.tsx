import Card from './Card';
import { ReleasePackage } from './components/ReleasePackage.ts';

// interface CardListProps {
//     pkgs: ReleasePackage[];
// }

const createCardFor = (pkg: ReleasePackage) => {
    return (
        <Card
            key={pkg.package_name}
            pkg={pkg}
        />
    );
}

const CardList = ({pkgs}: ReleasePackage[]) => {
    return (
        <>
            {
                // console.log("Rendering CardList with packages:", pkgs),
                pkgs.map(pkg => createCardFor(pkg))
            }
        </>
    );
}

export default CardList;

