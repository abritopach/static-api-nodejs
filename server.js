/* https://css-tricks.com/creating-static-api-repository/ */

const API = require('static-api-generator')
const moviesApi = new API({
    blueprint: 'movies/:language/:genre/:year/:movie',
    outputPath: 'output'
})

moviesApi.generate({
    endpoints: ['genre'],
    levels: ['year', 'language'],
    root: 'genre'
})

moviesApi.generate({
    endpoints: ['movie']
})
