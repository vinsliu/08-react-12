import { useState } from "react";
import "./App.css";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCompletedTodos, selectTodos } from "./redux/selectors";
import { addTodo, toggleTodo } from "./redux/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <Container>
      <h1>Liste des tâches</h1>
      <Form.Control
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche ..."
      />
      <Button onClick={handleAddTodo} className="my-2">
        Ajouter
      </Button>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.texte}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h2>Tâches terminées</h2>
      <ListGroup>
        {completedTodos.map((todo) => (
          <ListGroup.Item key={todo.id}> {todo.texte} </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
