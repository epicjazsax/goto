import stringify from "json-stringify-pretty-compact";
import JsonView from '@uiw/react-json-view';
import { nordTheme as jsonTheme } from '@uiw/react-json-view/nord';
// import { vscodeTheme as jsonTheme } from '@uiw/react-json-view/vscode';
// see themes at https://uiwjs.github.io/react-json-view/

const Card = ({pkg}: ReleasePackage) => {
    return (
        <div className='card bg-light-gray dib br3 pa3 ma2 shadow-hover bw2 black' data-testid='card'>
            <div>
                <span><h2 className='qd-red di'>{pkg.package_name}</h2></span><span className='pa2'/>
                { pkg.location.includes("Cross-Platform_Options") &&  <span className='gray'>[Cross-Platform]</span> || <br/> }
                {/* {pkg.poc && <p>poc: {pkg.poc}</p>} */}
                {/* <pre>{stringify(pkg)}</pre> */}
                <JsonView value={pkg} style={jsonTheme} displayDataTypes={false} collapsed={2} enableClipboard={false} />
            </div>
        </div>
    );
}

export default Card;

