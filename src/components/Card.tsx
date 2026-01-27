import type EntryInterface from "./EntryInterface";

const Card = ({ alias, url, owner }: EntryInterface) => {
    return (
        <div className='bg-purple dib pa3 ma2'>
            <div>
                <h2>Alias is: {alias}</h2>
                <h4>URL is: {url}</h4>
                <p>Owner is: {owner}</p>
            </div>
        </div>
    );
}

export default Card;

