/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

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
}
