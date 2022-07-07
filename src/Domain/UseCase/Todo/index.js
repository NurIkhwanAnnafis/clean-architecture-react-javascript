import { TodoDataSource } from "../../../Data/DataSource/Todo";

export const UGetTodoList = async () => {
  const data = await TodoDataSource.getTodoList();

  return data;
};