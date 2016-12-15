// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Find Duplicate Files
// https://www.interviewcake.com/question/javascript/find-duplicate-files

'use strict';

let result = (function(root) {
    const fs = require('fs');

    function findDuplicateFiles(path) {
        let directory = fs.statSync(path),
            fileDict = {},
            originals = [],
            directories = [];
        
        
        if (directory.isDirectory()) {
            directories.push(path);
            
            while(directories.length > 0) {
                let currentDirectory = directories.pop();
                
                fs.readdirSync(currentDirectory).forEach(function(path) {
                    path = currentDirectory + "/" + path;
                    let fileStats = fs.statSync(path);
                    if (fileStats.isDirectory()) {
                        directories.push(path);
                    } else {
                        let contents = fs.readFileSync(path);
                        if (fileDict.hasOwnProperty(contents)) {
                            if (fileDict[contents].modified < fileStats.mtime) {
                                originals.push({
                                   original: fileDict[contents].path,
                                   duplicate: path.path
                                });
                            } else {
                                originals.push({
                                   original: path,
                                   duplicate: fileDict[contents].path
                                });
                            }
                        } else {
                            fileDict[contents] = { path: path, modified: fileStats.mtime}
                        }
                    }
                });
            }
        } else {
            throw Error(directory + " is not a directory");
        }
        
        return originals;
    }
    
    return findDuplicateFiles(root);
})(process.argv[2] || __dirname);

console.log(result);
