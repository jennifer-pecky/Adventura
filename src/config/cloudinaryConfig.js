import cloudinary from 'cloudinary-core';

cloudinary.config({
    cloud_name: 'your_cloud_name',
    api_key: 'your_api_key',
    api_secret: 'your_api_secret',
});

export default cloudinary;
