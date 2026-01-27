import type EntryInterface from "./EntryInterface";

const Card = ({ alias, url, owner }: EntryInterface) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black' data-testid='card'>
            <div>
                <h2>Alias is: {alias}</h2>
                <h4>URL is: {url}</h4>
                <p>Owner is: {owner}</p>
            </div>
        </div>
    );
}

export default Card;

