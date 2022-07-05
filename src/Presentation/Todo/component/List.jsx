import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { listData = [] } = props;

  return (
    <ul>
      Todo List:
      {listData.map((data, index) => <li key={index}>{data.title}</li>)}
    </ul>
  )
}

TodoList.propTypes = {
  listData: PropTypes.arrayOf({
    completed: PropTypes.bool,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
  })
};

export default TodoList;