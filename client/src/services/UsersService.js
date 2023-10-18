import axios from 'axios';
import { AUTH_TOKEN } from '../constants/AuthConstant';

let UsersService = {};

UsersService.get_users = async function () {
    try {
        const response = await axios.get('https://test.admin.toptips.kz/admin/api/waiters/all', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem(AUTH_TOKEN)}`, // Use the actual token value
            },
        });
        return response.data;
    } catch (e) {
        return e;
    }
};

UsersService.get_institutions = async function () {
    try {
        const response = await axios.get(
            'https://test.admin.toptips.kz/admin/api/restaurants/all',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem(AUTH_TOKEN)}`,
                },
            },
        );
        return response.data;
    } catch (e) {
        return e;
    }
};

UsersService.get_institution_type = async function () {
    try {
        const response = await axios.get(
            'https://test.admin.toptips.kz/admin/api/restaurantType/list',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem(AUTH_TOKEN)}`,
                },
            },
        );
        return response.data;
    } catch (e) {
        return e;
    }
};

UsersService.get_admins = async function () {
    try {
        const response = await axios.get('https://test.admin.toptips.kz/admin/api/admin', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem(AUTH_TOKEN)}`,
            },
        });
        return response.data;
    } catch (e) {
        return e;
    }
};

export default UsersService;
