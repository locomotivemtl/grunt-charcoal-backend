/**
 * @file Add Git hooks to current project.
 */

module.exports = {
    backend: {
        'pre-commit': 'jsonlint phplint phpunit phpcs'
    }
};
