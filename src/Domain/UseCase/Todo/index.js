import { TodoDataSource } from "../../../Data/DataSource/Todo";
import '../../Model/MTodo';

/** @type {import("../../Repository/RTodo").RGetTodoList} */
export const UGetTodoList = async () => {
  const res = await TodoDataSource.getTodoList();

  /**
     * @type {DataUsecase[]}
     */
  const data = res.map(val => ({
    id: val.id,
    name: val.title,
  }))

  return data;
};