import networkService from "../../../Service/network"
import './Entity/ETodo';

export const getTodoList = async () => {
  try {
    /**
     * @type {Data}
     */
    const { data } = await networkService.get('/todos');

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}