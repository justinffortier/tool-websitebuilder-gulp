const fs = require('fs');
const { exec } = require("child_process");

const createPackageJson = () => {
    const packageJson = require('../../package.json');
    packageJson.scripts = packageJson.scripts ? packageJson.scripts : {}
    packageJson.dependencies = packageJson.dependencies ? packageJson.dependencies : {}
    packageJson.devDependencies = packageJson.devDependencies ? packageJson.devDependencies : {}
    packageJson.scripts.start = "./node_modules/gulp/bin/gulp.js develop";
    packageJson.scripts.build = "./node_modules/gulp/bin/gulp.js develop --release true";
    packageJson.scripts.build = "./node_modules/gulp/bin/gulp.js develop --release true";
    packageJson.dependencies = {
        ...packageJson.dependencies,
        "babelify-9": "^9.0.0-alpha.1",
        "gulp": "^4.0.2",
        "bootstrap": "^5.1.3"
    },

    packageJson.devDependencies = {
        ...packageJson.devDependencies,
        "@babel/core": "^7.15.8",
        "@babel/plugin-proposal-class-properties": "^7.16.7",
        "@babel/plugin-transform-runtime": "^7.17.0",
        "@babel/preset-env": "^7.16.11",
        "@babel/preset-react": "^7.16.7",
        "@babel/register": "^7.16.0",
        "browserify": "^17.0.0",
        "eslint": "^8.0.1",
        "gulp-cli": "^2.3.0",
    },
    
    fs.writeFile(__dirname + "/../../package.json", JSON.stringify(packageJson, null, 2), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}

const createFolders = () => {
    const folders = [
        './src',
        './src/assets',
        './src/assets/scss',
        './src/assets/js',
        './src/assets/docs',
        './src/assets/fonts',
        './src/assets/img',
        './src/pages',
        './src/views',
        './src/views/common',
        './src/views/widgets',
        './src/locales',
    ]
    
    folders.forEach((folder) => {
        if (!fs.existsSync(folder)){
            fs.mkdirSync(folder);
        }    
    })
}

const copyBoilerPlate = async ({
    source, 
    dest,
    root
}) => {
    fs.readdir(`${__dirname}/${source}`, async (err, files) => {
        if (err) {
            throw err;
        }

        function copyFile(source, destination) {
            const input = fs.createReadStream(source);
            const output = fs.createWriteStream(destination);
            return new Promise((resolve, reject) => {
                output.on('error', reject);
                input.on('error', reject);
                input.on('end', resolve);
                input.pipe(output);
            });
        }
        
        const promises = files.map(file => {
            const sourcePath = `${__dirname}/${source}/${file}`
            const destination = root 
                ? `${__dirname}/../../${file}`
                : `${__dirname}/../../src/${dest}/${file}` 

            return copyFile(sourcePath, destination);
        });
        
        await Promise.all(promises).then(_ => {
            // do what you want
            console.log('done');
        }).catch(err => {
            // handle I/O error
            console.error(err);
        });
    });

    
}

const init = async () => {
    createPackageJson()
    createFolders()
    await copyBoilerPlate({
        source: 'common',
        dest: 'views/common',
        root:false
    })
    await copyBoilerPlate({
        source: 'assets/js',
        dest: 'assets/js',
        root:false
    })
    await copyBoilerPlate({
        source: 'assets/scss',
        dest: 'assets/scss',
        root:false
    })
    await copyBoilerPlate({
        source: 'locales',
        dest: 'locales',
        root: false
    })
    await copyBoilerPlate({
        source: 'pages',
        dest: 'pages',
        root:false
    })
    await copyBoilerPlate({
        source: 'root',
        root: true
    })

    console.log('Success!! Please run yarn install to install new dependencies, then run yarn start to start view your website')
}

init()