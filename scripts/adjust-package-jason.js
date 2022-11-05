const path = require('path');
const args = process.argv.slice(2);
const fs = require('fs');
const project = args[0];
const version = args[1];

if(!project) throw new Error("project not provided");
if(!version) throw new Error("version not provided");

switch(project){
    case 'tp.profile.ts':
        const profilePath = path.resolve(__dirname,'../',project,'package.json');
        const profilePackage = require(profilePath)
        profilePackage.name = "@miladbonakdar/profile.wire.ts";
        profilePackage.version = version;
        profilePackage.description = "OpenAPI client for profile service";
        profilePackage.author = "Milad Bonakdar";
        profilePackage.publishConfig = {
            registry: "https://npm.pkg.github.com"
        };
        profilePackage.repository = "github:miladbonakdar/tp.wire.ts";
        fs.writeFileSync(profilePath, JSON.stringify(profilePackage, null, 2))
}