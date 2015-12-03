/**
 * @file File Watcher
 */

module.exports = {
    json: {
        files: [
            '*.json',
            'metadata/**/*.json',
            'config/**/*.json'
        ],
        tasks: [ 'jsonlint', 'notify:json' ]
    }
//  php: {
//      files: [
//          'src/**/*.php',
//          'tests/**/*.php'
//      ],
//      tasks: [ 'phplint', 'notify:php' ]
//  }
};
