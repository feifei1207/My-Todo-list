import { useState } from "react"

function CreateFrom({addTodo}) {
    //建立input內容的變數
    const [content, setContent] = useState('');
    const handleSubmit=(e)=>{
        // 取消預設行為
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 清除文字方塊input內容
        setContent('');
    }
    return (
        <form className="create-from" onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="輸入代辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            /> */}

            <input type="text" placeholder="請輸入代辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            />
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateFrom
