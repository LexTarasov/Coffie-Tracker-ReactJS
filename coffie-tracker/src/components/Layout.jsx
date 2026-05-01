import Authentication from "./Authentication";
import Modal from "./Modal";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

export default function Layout(props) {
  const { children } = props;

  const [showModal, setShowModal] = useState(false);

  const { globalUser, logout } = useAuth();

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">COFFEE TRACKER</h1>
        <p>For Coffee Insatiates</p>
      </div>
      {globalUser ? (
        <div>
        <p>Hello, {globalUser.displayName} 👋</p> 
        <button onClick={logout}>
            <p>Logout</p>
        </button>
    </div>
      ) : (
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p>Sign up free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      )}
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Coffee-Track</span> was made by{" "}
        <a target="_blank" href="">
          AlexDev
        </a>{" "}
        using the{" "}
        <a href="https://www.fantacss.smoljames.com" target="_blank">
          FantaCSS
        </a>{" "}
        design library.
        <br />
        Check out the project on{" "}
        <a
          target="_black"
          href="https://github.com/LexTarasov"
        >
          GitHub
        </a>
        !
      </p>
    </footer>
  );

  function handleCloseModal(){
    setShowModal(false)
  }

  return (
    <>
      {showModal && (
        <Modal
          handleCloseModal={handleCloseModal}
        >
          <Authentication
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
