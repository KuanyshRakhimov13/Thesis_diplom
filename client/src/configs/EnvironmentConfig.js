const dev = {
    API_BASE_URL: 'https://admin.toptips.kz/admin/api/',
    API_NEW_BASE_URL: 'https://admin.toptips.kz/admin/api/',
    S3_BASE_URL: 'https://admin.toptips.kz/admin/api/',
};

const getEnv = () => {
    return dev;
};

export const env = getEnv();
