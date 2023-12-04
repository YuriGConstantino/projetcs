/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'csyxkpbavpcrhwqhcpyy.supabase.co',
                port: '',
                pathname: '**',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true
    }
},

    module.exports = nextConfig