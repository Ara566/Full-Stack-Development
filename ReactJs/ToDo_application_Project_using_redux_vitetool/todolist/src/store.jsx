import { createStore } from "redux";

const initialstate = {
  todos: [{ id: 1, title: "goto movie" }],
  nextId: 2,
};

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "addtodo":
      const newTodo = { id: state.nextId, title: action.payload.title };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        nextId: state.nextId + 1,
      };

    //   {id:,title}

    case "edittodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };

    case "deletetodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;