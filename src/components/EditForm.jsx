import { useState } from "react";
function EditForm({todo, editTodo }) {
    // 建立input內容的變數
    // 預設值為修改中的todo內容
    const [content, setContent] = useState(todo.content);

    const handleSubmit = (e) => {
        // 取消事件預設行為
        e.preventDefault(); // prevent預設 ，這裡不要預設
        editTodo(todo.id, content)
        // // 增加todo內容
        // PiAddressBookTabsDuotone(content);
        // 清除input內容
        // setContent('');
    }
    
    return (
        <form className="create-from" onSubmit={handleSubmit}>
            <input type="text" // placeholder="輸入代辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm