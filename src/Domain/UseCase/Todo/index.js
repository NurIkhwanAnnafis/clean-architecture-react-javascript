import { TodoDataSource } from "../../../Data/DataSource/Todo";

export const UGetTodoList = async () => await TodoDataSource.getTodoList();