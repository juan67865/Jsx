function App() {
    return (
        <div>
            <Tweet
                name="Jose Perez"
                username="joprez"
                date={new Date().toDateString()}
                message="New game is sooooo good!!!"
            />
            <Tweet
                name="Frank Manson"
                username="rank1"
                date={new Date().toDateString()}
                message="First place in Call of Duty tournment again. Let's go!!!"
            />
            <Tweet
                name="Kyle Chang"
                username="klyec"
                date={new Date().toDateString()}
                message="God of War is a great game."
            />
        </div>
    );
}