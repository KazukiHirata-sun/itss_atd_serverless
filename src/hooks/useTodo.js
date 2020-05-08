import { useState, useEffect} from 'react'; 

// For Firebase
// import firebase from 'firebase'; 
// For Firebase

const useTodo = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  const [isChangedTodo, setIsChangedTodo] = useState(false);
   
  const [isChangedFinished, setIsChangedFinished] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  
  const [tabIndex, setTabIndex] = useState(0);
  
  const [isOpenDeleteModalByNumber, setIsOpenDeleteModalByNumber] = useState(false);
  
  const [deleteType, setDeleteType] = useState("todo");

  // For Firebase
//   const db = firebase.firestore(); 

//   useEffect(() => {
//     (async () => {
//       const resTodo = await db.collection("todoList").doc("todo").get();
      
//       setTodoList(resTodo.data().tasks);
//       const resFinishedTodo = await db.collection("todoList").doc("finishedTodo").get();
      
//       setFinishedList(resFinishedTodo.data().tasks);
     
//       setIsLoading(false);
//     })()
//   }, [db])

//   useEffect(() => {
//     if (isChangedTodo) {
//       (async () => {

//         setIsLoading(true)
//         const docRef = await db.collection('todoList').doc('todo');
//         docRef.update({ tasks: todoList })
        
//         setIsLoading(false)
//       })()
//     }
//   }, [todoList, isChangedTodo, db])

//   useEffect(() => {
//     if (isChangedFinished) {
//       (async () => {

//         setIsLoading(true)
//         const docRef = await db.collection('todoList').doc('finishedTodo');
//         docRef.update({ tasks: finishedList })
//         setIsLoading(false)
//       })()
//     }
//     setIsChangedFinished(false)
//   }, [db, finishedList, isChangedFinished])
  // For Firebase

  const addTodo = async () => {
    if (!!input) {
      setIsChangedTodo(true);
      setTodoList([...todoList, input]);
      setInput('');
      setIsOpenAddModal(false);
    }
  }

  const deleteTodo = (index) => {
    setIsChangedTodo(true);
    setTodoList(todoList.filter((_, idx) => idx !== index))
  }

  const deleteFinishTodo = (index) => {
    setIsChangedFinished(true);
    setFinishedList(finishedList.filter((_, idx) => idx !== index))
  }

  const finishTodo = (index) => {
    setIsChangedTodo(true);
    setIsChangedFinished(true);
    deleteTodo(index)
    setFinishedList([...finishedList,todoList.find((_, idx) => idx === index)])
  }

  const reopenTodo = (index) => {
    setIsChangedTodo(true);
    setIsChangedFinished(true);
    deleteFinishTodo(index)
    setTodoList([...todoList,finishedList.find((_, idx) => idx === index)])
  }

  return {
    isLoading,
    input,
    setInput,
    addTodo,
    deleteTodo,
    deleteFinishTodo,
    todoList,
    finishedList,
    finishTodo,
    reopenTodo,
    isOpenAddModal,
    setIsOpenAddModal,
    tabIndex,
    setTabIndex,
    isOpenDeleteModalByNumber,
    setIsOpenDeleteModalByNumber,
    deleteType,
    setDeleteType,
  }
}

export default useTodo;