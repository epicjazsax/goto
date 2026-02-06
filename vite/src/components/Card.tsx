import type EntryInterface from "./EntryInterface";

const Card = ({ alias, url, owner }: EntryInterface) => {
    return (
        <div className='bg-purple-800 border border-color-white inline-block p-3 m-2'>
            <div>
                <h2>Alias is: {alias}</h2>
                <h4>URL is: {url}</h4>
                <p>Owner is: {owner}</p>
            </div>
        </div>
    );
}

export default Card;

