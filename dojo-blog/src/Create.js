import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsPending(false);
            history.push("/");
        })
    };

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                    required
                />
                <label>Blog Body:</label>
                <textarea
                    value={body}
                    onChange={({ target }) => setBody(target.value)}
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={({ target }) => setAuthor(target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;