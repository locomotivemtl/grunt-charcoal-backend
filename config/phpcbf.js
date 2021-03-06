/**
 * @file Automatically correct coding standard violations in PHP files.
 */

module.exports = {
    src: {
        src: [ 'src/**/*.php' ]
    },
    tests: {
        src: [ 'tests/**/*.php' ]
    },
    options: {
        standard: 'phpcs.xml',
        noPatch: true
    }
};
