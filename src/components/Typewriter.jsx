//importing typewriter-effect
import Typewriter from 'typewriter-effect';
import '../App.css';

function App() {
  return (
    <div className="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString('Welcome!')

            .pauseFor(1000)
            .deleteAll()
            .typeString("Hi, I'm Dubravko")
            .start();
        }}
      />
    </div>
  );
}

export default App;
