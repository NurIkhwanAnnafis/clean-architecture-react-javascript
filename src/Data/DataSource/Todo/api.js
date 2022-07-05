import networkService from "../../../Service/network"

export const getTodoList = async () => {
  try {
    const { data } = await networkService.get('/todos');
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}