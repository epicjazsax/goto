export class ReleasePackage {
    package_name: string = 'Untitled Package';
    location: string = 'TBD';
    maintainer: string = 'TBD';

    constructor(json: string) {
        Object.assign(this, json);
    }
    // static fromJSON(json: string): ReleasePackage {
    //     const parsed = JSON.parse(json);
    //     return new ReleasePackage(parsed);
    // }
}

const jsonString = '{"package_name": "VersaLab", "location": "Trantor", "maintainer": "tzakrajsek"}';
const pkg: ReleasePackage = new ReleasePackage(JSON.parse(jsonString));
console.log(pkg);


