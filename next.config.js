const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        "URL": "http://localhost:8000/"
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
