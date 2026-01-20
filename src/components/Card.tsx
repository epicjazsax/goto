const Card = ({ package_name, location, maintainer }: { package_name: string; location: string; maintainer: string }) => {
    return (
        <div className='.card bg-light-green dib br3 pa3 ma2 shadow-hover bw2 black' data-testid='card'>
            <div>
                <h2>{package_name}</h2>
                {/* <h4>{location}</h4> */}
                {maintainer && <p>Maintainer: {maintainer}</p>}
            </div>
        </div>
    );
}

export default Card;

