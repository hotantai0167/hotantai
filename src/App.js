import TodoList from "./components/TodoList";
import Textfled from "@atlaskit/textfield";
import Button from "@atlaskit/button";

function App() {
  return (
    <>
  <h3>Danh sách cần làm</h3>
  <Textfled 
  name='add-todo'
  placeholder='Thêm việc cần làm...'
  elemAfterInput={
   <Button isDisbled={true} appearance='primary'>
    Thêm
    </Button>
  }
  css={{padding: '2px 4px 2px'}}
  ></Textfled>
  <TodoList/>
  </>
  );
}

export default App;
