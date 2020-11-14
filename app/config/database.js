'use strict'

const config = {
    "type": process.env.FB_TYPE,
    "project_id": process.env.FB_PROJECT_ID,
    "private_key_id": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfm9s+Din/JH7Z\nKBUfIBMtwAPi8NxFgv4CfozctXC5cAUM6cWooVbPp1fZ2QwpPm7XPVY+fQVlvca/\nCzGxxAxZKhwrO0X4Om0eErfweg5EhN/Z50YWvtn76i1t1ad1fzW0OBJr+gXG1Ycx\n6K+zMp2HHBUUx6xBFp2cjx5FY4N124X77e2qnI/ppX+65QGHfaouUS5vZITLSRRr\nQxtahetgbU3Ld9RYUUDqhmpkMVfSWIyAU8gkB6zRkElZjDpjD4ziy/Z72A/dTCgU\nJE5wugLzXyaAvo+GqrbU01A9duOzvnCbAf6oRUV25S78Ex8wCwco+5rx38Let54C\nA77PAIU3AgMBAAECggEAFu6FqXzPe+D6eKjRoA8zsjcMV+bTPwl7BVC5XFyVPY9i\nqmBMDdZgaqVYcexFWwelVTdy1LeRtvR1Qa2SDkBkpcrvEScK/ocmdlOqKdrfgei1\nYNFhuJLjLtaOgGFaFf+Y77O+sdTST6cOLZWI6O40w9y9CqdFkHR3YK8PYljR4nTV\nf9u8a9oPECZ2zWNe6KFyEUJAjIRDwu5+d094oXYRFaXi6qi6hJ7+NeJZ0vxBU3Kc\n9DaCRQF/SaQFCqUN3sCH+MKZ7py1y29kZd/61kgYXnctyZSnZyM6Z8KYu55D585E\nuE62WPVlxhaKsuW8SQRD9ZNQnPvVeogYTlHrmZcugQKBgQDf36zE/ctMufIv2LOb\nHvpesBXuCnozpNvdsHyENtYf/HVNzCkN2O/CRnigH0vxCQ5QfhjFoe8rLcqw0Jgy\nawxbf/CThmyKrMyo3Tk5XZB5IsHGczm+8xq2pNAHYSGeg9TWZ4pqvTd9gjK4XMai\nNzUHV5sFsuq431MlVFDo7S3MmQKBgQC2g1EjP6w1NMUs+n5/GD61V9VpUW0+5trL\n/uj1EzEjmGosWleNXdgsgosUStIk5Cc0pUNQ7k8zQO+cDSM3EDLcTsbeP9e3bbFP\nOIoOmNiqC1pE2CoW8atdMnyjLC8Aufed7/K4d60G78t0aHn35Qc8qx3b7Q4zzW7V\nmFKlt/yyTwKBgBcO1J6dfTjz1evzp9wMPsFN5ZRU4+05x6N3r/t2Imu89uACbSAN\n/fPGiloDnzC+PAkyU57XZOjPmJbJhUN8HxO1g7POHpPR5GpoDqLH7j9rwwWLjKEM\nLO4u33ZDHNFUxrEmjO0de/+jT1IJzDOc+As/jKnzmZVc+xVXL9Ytx4/RAoGBAIDq\n+OEBFM7wW2aN+dQkeAb359LgpV4NCveVM1AJImiWPEjf93/vjcbC3yKSRyWv0tGo\n+oesDV2SvK1pyjoWwxZCvs42IlV6sgfXVA1Dgad7JWQDnJdgVT8bblaD2x+UPIfe\n+X+7aQjBUOEE+0JTEG2WIR07sRB+R4+wbJCKCYCZAoGAVjbzeXJekAkULKTj8/Ly\nkAob9Ueg/9U7nWP6Y9c3AGbD/NQtNUfB2W0EnCDz3dgLZzmWHL4THKBhn03tPQ8K\nPxBRqwdONqbsfL+KNVzpNu1T52H2DI8PioiTf40Bo2QUEW41g6Yrngh/DYdKhifQ\nWGiuBMD+S/Ki2ryWfuWKKcw=\n-----END PRIVATE KEY-----\n",
    "private_key": process.env.FB_PRIVATE_KEY, 
    "client_email": process.env.FB_CLIENT_EMAIL,
    "client_id": process.env.FB_CLIENT_ID,
    "auth_uri": process.env.FB_AUTH_URL,
    "token_uri": process.env.FB_TOKEN_URL,
    "auth_provider_x509_cert_url": process.env.FB_AUTH_PROVIDER,
    "client_x509_cert_url": process.env.FB_CLIENT_URL
};

module.exports = {
    firebaseConfig: config
}