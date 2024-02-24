import logo from "./logo.svg";
import "./App.css";

const header1 = document.createElement("h1");
header1.textContent = "chemycal rage";
header1.className = "classTop";

const text1 = document.createElement("span");
text1.textContent = "I am a relateive text";
text1.className = "class span higher";

export const list1 = document.createElement("button");
list1.textContent = "myButtonX";

const myPage = document.getElementById("root");
myPage.append(header1);
myPage.append(text1);
myPage.append(list1);

export function App() {
  return (
    <div className="App">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}

export function MyComponentX() {
  return (
    <div>
      <h1>HELLOW</h1>
      <span>It is the coment lo g</span>
      <div className="compose-center-react min-width-500">
        <h3 className="title-center-react">Hi Chav_!</h3>
        <p className="text-center-react">
          It is the content text of my pharagrap and contains some interesting
          messages, like "Have fun wiriting code."
        </p>
      </div>
      <div className="compose-img-card">
        <h2 className="compose-img-title">My responsive image</h2>
        <img src={logo} alt="img logo" width="200px"></img>
      </div>
      <div className="footer-react">
        <span className="description-footer">It is the footer</span>
      </div>
    </div>
  );
}
export function HeaderX() {
  return (
    <header className="compose-img-card">
      <h1 className="compose-img-title">HEADER - My responsive image</h1>
      <img src={logo} alt="img logo" width="200px"></img>
    </header>
  );
}
export function Header() {
  return (
    <header>
      <nav>
        <img src="logo192.png" width='40px' alt='logo small'/>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
export function Footer() {
  return (
    <footer className="footer-react">
      <span className="description-footer">FOOTER - It is the footer</span>
    </footer>
  );
}
export function MainContent() {
  return (
    <div>
      <h1>MAIN CONTENT</h1>
      <div className="compose-center-react min-width-500">
      <h3 className="title-center-react">Hi Chav_!</h3>
      <p className="text-center-react">
        It is the content text of my pharagrap and contains some interesting
        messages, like "Have fun wiriting code."
      </p>
      </div>
    </div>
  );
}
export function ExplorerMidu({titlex}) {
  return (
    <>
      <h1>EXAMPLE TEST component with params</h1>
      <br/>
      <h2>{titlex}</h2>
    </>
  )
}

export default function SingleComponentButton() {
  return (
      <h1>ADS</h1>
  )
}

// const ExportedToReactApp = {
//   App,
//   MyComponentX,
//   HeaderX,
//   Header,
//   Footer,
//   MainContent,
//   ExplorerMidu,
//   SingleComponentButton
// };

// export default ExportedToReactApp;
