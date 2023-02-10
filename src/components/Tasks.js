import Task from './Task';

const Tasks = function ({ tasks, onDelete, onToggle }) {
  return (
    <div>
      {tasks.map(function (task) {
        // return <h3 key={task.id}>{task.text}</h3>;
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
