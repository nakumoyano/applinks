import {
  Box,
  Button,
  Input,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(10),
  },
  appWrapper: {
    backgroundColor: "#12343b",
    minWidth: "500px",
    minHeight: "650px",
    padding: "30px",
    boxSizing: "bordex-box",
    borderRadius: "10px",
    boxShadow: "3px 6px 40px #000",
    marginBottom: "10px",
  },
  h1: {
    color: "fff",
    textAlign: "center",
    margin: "30px 0",
  },
  taskInput: {
    outline: "none",
    width: "300px",
    padding: "15px",
    marginRight: "80px",
    fontSize: "20px",
    color: "#ccc",
    backgroundColor: "#000",
    border: "1px solid #c89666",
    borderRadius: "10px",
  },
  buttonAdd: {
    width: "70px",
    padding: "15px 15px",
    fontSize: "20px",
    borderRadius: "10px",
    border: "0",
    backgroundColor: "#f1af71",
    cursor: "pointer",
  },
  listItem: {
    display: "flex",
    margin: "20px 0",
    border: "1px solid #ccc",
    padding: "10px",
    maxHeight: "30px",
    borderRadius: "15px",
  },
  buttonComplete: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    fontSize: "28px",
    borderRadius: "50%",
    color: "#ff6c6c",
    marginRight: "10px",
  },
  buttonDelete: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    fontSize: "28px",
    borderRadius: "50%",
    color: "lightseagreen",
  },
  buttonEdit: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    fontSize: "28px",
    borderRadius: "50%",
    color: "#e2d029",
    marginRight: "10px",
  },
  complete: {
    textDecorationStyle: "solid",
    textDecorationLine: "line-throught",
    textDecorationColor: "#ff6c6c",
    opacity: "0.6",
  },
  list: {
    width: "220px",
    backgroundColor: "#12343b",
    border: "none",
    color: "#ccc",
    fontSize: "20px",
    paddingLeft: "10px",
    marginRight: "150px",
  },
}));

const Comentarios = () => {
  //para que se guarde en el localstorage
  const inicitialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(inicitialState);
  const [editTodo, setEditTodo] = useState(null);

  //styles
  const classes = useStyle();

  //para que se guarde en el localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.appWrapper}>
        <h1 className={classes.h1}>Comentarios</h1>
        <form
          onSubmit={onFormSubmit}
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        >
          <input
            type="text"
            placeholder="Ingrese un comentario"
            className={classes.taskInput}
            value={input}
            required
            onChange={onInputChange}
          />
          <button className={classes.buttonAdd} ty="submit">
            {editTodo ? "OK" : "Add"}
          </button>
        </form>
        <div todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}>
          {todos.map((todo) => (
            <li className={classes.listItem} key="todo.id">
              <input
                type="text"
                value={todo.title}
                className={classes.list}
                onChange={(e) => e.preventDefault()}
              />
              <div>
                <button
                  className={classes.buttonEdit}
                  onClick={() => handleEdit(todo)}
                >
                  <Edit />
                </button>
                <button
                  className={classes.buttonDelete}
                  onClick={() => handleDelete(todo)}
                >
                  <Delete />
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comentarios;
