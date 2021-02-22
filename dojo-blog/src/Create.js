import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
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
                    onChange={({target}) => setAuthor(target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;