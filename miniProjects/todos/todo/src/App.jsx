import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";

const dummy_data = [
  { id: 1, title: "task 1", complete: false },
  { id: 2, title: "task 2", complete: false },
  { id: 3, title: "task 3", complete: true },
  { id: 4, title: "task 4", complete: false },
];

function App() {
  const [data, setData] = useState(dummy_data);

  const onDeleteHandler = (id) => {
    let newData = data.filter((todo) => todo.id !== id);
    setData(newData);
  };

  const onCompleteHandler = (id) => {
    const idx = data.findIndex((item) => item.id === id);
    const updatedElement = { ...data[idx], complete: !data[idx].complete };
    let newData = [...data];
    newData[idx] = updatedElement;
    setData(newData);
  };

  const addTodoHandler = (title, id) => {
    setData([...data, { title, id, complete: false }]);
  };

  return (
    <main>
      <Card>
        <TodoAddForm addTodo={addTodoHandler} />
      </Card>
      <Card>
        <TodoList
          data={data}
          onDelete={onDeleteHandler}
          onComplete={onCompleteHandler}
        />
      </Card>
    </main>
  );
}

export default App;
