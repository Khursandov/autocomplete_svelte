import Api from '../plugins/ApiService.js'

export const getUsers = async () => {
    try {
      const response = await Api.get("users");
      return response;
    } catch (error) {
      console.error(error);
    }
};