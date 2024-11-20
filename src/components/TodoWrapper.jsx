import { useState } from "react";
import CreateFrom from "./CreateFrom";
import Todo from "./Todo";

function TodoWrapper() {

    //因為有N個Todo，所以使用陣列存取
    // const [todos,setTodos] = useState('[list1, list2, ]');
    // 因為陣列需要key屬性，所以要改成陣列物件，加上id
    // const [todos, setTodos] = useState([
    //     { content: 'List1', id: Math.random() },
    //     { content: 'List2', id: Math.random() },
    // ]);


    // 因為要判定todo是否被點擊，所以要增加一個標技術性 => isCompleted
    // 新增判定屬性isEdit => 是否編輯中
    const [todos, setTodos] = useState([
        { content: '⌛️', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '🦋', id: Math.random(), isCompleted: false, isEdit: false },
    ]);



    // 建立加入新的todo內容
    // 1. 使用...其餘運算子來保留原陣列內容
    // 2. 再加入新的內容
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false, isEdit: false }])
    }


    // 建立刪除todo函示，傳給Todo元件使用
    // 使用filter方法，去除被刪除的Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 檢查目前的id是否為被刪除的id
            // 如果不是，則保留
            return todo.id !== id
        }))
    }



    // 建立雙向(toggle)切換'完成與取消'的函示
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            // 檢查被點擊的id是否跟目前陣列中的id一樣
            // yes => 1.取出Todo 2.將isCompleted屬性值反向處理
            // No =>
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }




    // 建立是否修改的函示(雙向)
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            // 1. 逐筆檢查目前的todo.id是否等於被修改的id
            // 2. yes => 1.取出todo資料 2.修改isEdit屬性值為反向
            //    No => todo不變

            // 三元運算子寫法
            return todo.id === id 
            ? {...todo, isEdit: !todo.isEdit }
            : todo

            // if-else寫法
            // if (todo.id === id) {
            //    return { ...todo, isEdit: !todo.isEdit }
            // } else {
            // return todo
            // }
        }))
    }

    // 建立完成修改的函示(接下完成的動作)
    // 1. 異動content為新的內容
    // 2. isEdit改回 false
    const editTodo = (id, newContent) => {
        console.log('newContent:'+newContent);
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false } // ? 如果是 執行這個陣列
                : todo // : 如果不是
        }))
    }


    return (
        <div className="wrapper">
            <h1>To-do List ☑️</h1>
            <CreateFrom addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                        />
                })
            }
        </div>
    )
}

export default TodoWrapper