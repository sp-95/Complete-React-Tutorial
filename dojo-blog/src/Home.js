const Home = () => {
    const handleClick = e => console.log("Hello, world!", e);

    const handleClickAgain = (name, e) => console.log(`Hello ${name}`, e.target);

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain("Shashanka", e)}>Click me again</button>
        </div>
    );
}
 
export default Home;