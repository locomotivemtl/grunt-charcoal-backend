/**
 * @file Analyse PHP files for potential errors.
 */

module.exports = {
    src: {
        src: [ 'src/**/*.php' ]
    },
    tests: {
        src: [ 'tests/**/*.php' ]
    },
    options: {
        phpArgs : {
            '-f': null
        }
    }
};
