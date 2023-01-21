import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories} ) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function submit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }
  return (
    <form className="new-task-form" onSubmit={submit}>
      <label>
        Details
        <input type="text"  value={text}
          onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
