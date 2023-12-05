/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'csyxkpbavpcrhwqhcpyy.supabase.co',
                pathname: '**',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true
    }
},

    module.exports = nextConfig