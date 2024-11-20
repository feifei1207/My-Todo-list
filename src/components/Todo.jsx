import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

// 解構props的屬性名，用{屬性別}包起來
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    return (
        // 檢查todo.isEdit是否為修改狀態
        todo.isEdit
            // isEdit:true
            // 呼叫修改元件，並傳入todo資料
            ? <EditForm todo={todo} editTodo={editTodo} />
            // 新增一個completed類別規則
            // 使用反引號+三元運算子檢查isCompleted
            // 如果為真=>套用completed規則 ; 如果為否=>不套用
            // isEdit:false
            // 顯示todo資料
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* <p> 章魚燒小丸子 🍅</p> */}
                <p onClick={() => toggleCompleted(todo.id)}>{todo.content}</p>
                <div>
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }} />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }}
                    />
                </div >
            </div >
    )
}

export default Todo