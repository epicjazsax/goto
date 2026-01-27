class Entry {
    alias: string;
    url: string;
    owner: string;

    constructor(alias = '', url = '', owner = '') {
        this.alias = alias;
        this.url = url;
        this.owner = owner;
    }

    createCard() {
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black' data-testid='card'>
                <div>
                    <h2>Alias is: {this.alias}</h2>
                    <h4>URL is: {this.url}</h4>
                    <p>Owner is: {this.owner}</p>
                </div>
            </div>
        )
    }
}

const Card = ({ alias, url, owner }: { alias: string; url: string; owner: string }) => {
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

export default Entry;

