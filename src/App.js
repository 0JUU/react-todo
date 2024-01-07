//import React, {Component} from "react";  // 클래스 컴포넌트 import
import React, {useState} from "react";  // 함수형 컴포넌트 import
import "./App.css";

/*
// 클래스 컴포넌트
export default class App extends Component {
  
  state = {
    todoData : [
      
    ],
    value: ""
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    this.setState({todoData: newTodoData});
  };

  handleChange = (e) => {
    console.log('e', e.target.value);
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    this.setState({todoData: [...this.state.todoData, newTodo], value: ""});
  };

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({todoData: newTodoData});
  };

  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>ToDo List</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)} />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
            </div>
          ))}

          <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
            <input type="text"
                   name="value"
                   style={{flex: '10', padding: '5px'}}
                   placeholder="해야 할 일을 입력하세요."
                   value={this.state.value} onChange={this.handleChange}
            />
            <input type="submit"
                   value="입력"
                   className="btn" 
                   style={{flex: '1'}}
            />
          </form>
        </div>
      </div>
    )
  };
}
*/

// 함수형 컴포넌트
export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return(
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>ToDo List</h1>
        </div>
        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)} />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
          </div>
        ))}

        <form style={{display: 'flex'}} onSubmit={handleSubmit}>
          <input type="text"
                  name="value"
                  style={{flex: '10', padding: '5px'}}
                  placeholder="해야 할 일을 입력하세요."
                  value={value} onChange={handleChange}
          />
          <input type="submit"
                  value="입력"
                  className="btn" 
                  style={{flex: '1'}}
          />
        </form>
      </div>
    </div>
  )
}