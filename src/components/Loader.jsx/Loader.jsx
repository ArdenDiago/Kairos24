import './Loader.css';

export default function Loader() {
  return (
    <>
      <div id="preloader">
        <div className="wavy">
          <span style={{ '--index': 1 }}>L</span>
          <span style={{ '--index': 2 }}>o</span>
          <span style={{ '--index': 3 }}>a</span>
          <span style={{ '--index': 4 }}>d</span>
          <span style={{ '--index': 5 }}>i</span>
          <span style={{ '--index': 6 }}>n</span>
          <span style={{ '--index': 7 }}>g</span>
          <span style={{ '--index': 8 }}>.</span>
          <span style={{ '--index': 9 }}>.</span>
          <span style={{ '--index': 10 }}>.</span>
        </div>
      </div>
    </>
  );
}
