import { useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    
    setToDo("");

    /*
      function setToDos(currentArray) {}
      아래와 같은 함수로 currentArray는 input 에 입력한 값이다
    */
    setToDos((currentArray) => [toDo, ...currentArray]);
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr/>
      {toDos.map((item,index) => <li key={index}>{item}</li>)}
    </div>
  );
}

export default ToDo;