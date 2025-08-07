import axios from 'axios';

const API_URL = "http://localhost:8080/api/products";

// Lấy tất cả sản phẩm
export const getProducts = () => {
    return axios.get(API_URL);
};

// Lấy sản phẩm theo ID
export const getProductById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Tạo sản phẩm mới
export const createProduct = (product) => {
    return axios.post(API_URL, product);
};

// Cập nhật sản phẩm
export const updateProduct = (id, product) => {
    return axios.put(`${API_URL}/${id}`, product);
};

// Xóa sản phẩm
export const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
