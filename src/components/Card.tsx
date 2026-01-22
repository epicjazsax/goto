import { type ReleasePackage } from './ReleasePackage';
// import stringify from "json-stringify-pretty-compact";
import JsonView from '@uiw/react-json-view';
import { nordTheme as jsonTheme } from '@uiw/react-json-view/nord';
// import { vscodeTheme as jsonTheme } from '@uiw/react-json-view/vscode';
// see themes at https://uiwjs.github.io/react-json-view/

interface CardProps {
    pkg: ReleasePackage;
    showJson?: boolean;
}

const Card = ({ pkg, showJson }: CardProps) => {
    return (
        <div className='card dib br3 pa2 ma2 bw2 black' data-testid='card'>
            <div>
                <span><h2 className='qd-red di'>{pkg.package_name}</h2></span><span className='pa2' />
                {pkg.location.includes("Cross-Platform_Options") && <span className='black'>[Cross-Platform]</span> || <br />}
                {/* {pkg.poc && <p>poc: {pkg.poc}</p>} */}
                {/* <pre>{stringify(pkg)}</pre> */}

                {pkg.tags && pkg.tags.length > 0 &&
                    <div className='mt2 b--black'>
                        {/* <h4 className='di'>Tags:</h4><span className='pa2' /> */}
                        {pkg.tags.map((tag) => (
                            <span key={tag} className='tag black pa1 mr1 ba br2 b--light-silver'>#{tag}</span>
                        ))}
                    </div>
                }
                {showJson &&
                    <div className='mt2'>
                        <JsonView value={pkg} style={jsonTheme} displayDataTypes={false} collapsed={1} enableClipboard={false} />
                    </div>
                }
            </div>
        </div>
    );
}

export default Card;

