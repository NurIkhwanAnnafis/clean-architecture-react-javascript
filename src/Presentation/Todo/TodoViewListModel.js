import { useEffect, useState } from "react"
import { UGetTodoList } from "../../Domain/UseCase/Todo";

export const TodoViewListModel = () => {
  const [listData, setListData] = useState([]);

  
  useEffect(() => {
    const getTodos = async () => {
      const data = await UGetTodoList();
      setListData(data);
    }

    getTodos();
  }, []);

  return {
    listData,
  }
}