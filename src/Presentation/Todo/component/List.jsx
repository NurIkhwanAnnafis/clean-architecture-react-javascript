import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { listData = [] } = props;

  return (
    <ul>
      Todo List:
      {listData.map(data => <li key={data.id}>{data.name}</li>)}
    </ul>
  )
}

TodoList.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  )
};

TodoList.defaultProps = {
  listData: [{ id: 0, name: '' }],
}

export default TodoList;