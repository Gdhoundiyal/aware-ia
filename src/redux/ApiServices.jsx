import axios from "axios";

const API_URL = "http://116.202.210.102:3081"

const apiService = {
    login: async (credentials) => {
        const response = await axios.post(`${API_URL}/coach/login`, credentials);
        return response.data;
    },
   
};

export default apiService;
