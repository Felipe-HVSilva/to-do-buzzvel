import {  TaskProvaider } from '../../context/TaskContext';

import { Home } from '../../pages/Home';

function App() {


  return (
    <TaskProvaider>
      <Home />
    </TaskProvaider>

  );
}

export default App;
