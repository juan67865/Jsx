function App() {
    return (
      <div>
        <Person
          name="Juan"
          age={28}
          hobbies={["Playing video games", "watching tv", "drawinf"]}
        />
        <Person name="Jose" age={17} hobbies={["painting", "hanging with friends", "soccer"]} />
        <Person
          name="Willy"
          age={23}
          hobbies={["riding bikes", "smoking", "playing games"]}
        />
        <Person
          name="Mia"
          age={8}
          hobbies={["reading", "drawing", "music"]}
        />
      </div>
    );
  }