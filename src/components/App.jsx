import Header from "../components/Header/Header";
import "../blocks/page.css";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Main/components/Login/login.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setIsloggedIn] = useState(false); //Nuevo estado
  const [token, setToken] = useState(localStorage.getItem("token")); //Para el token

  const [selectedCard, setSelectedCard] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error("Error al cargar tarjetas:", err);
      });
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        () => console.log(err);
      });
  }, []);

  const handleUpdateUser = (data) => {
    console.log(data);
    (async () => {
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  };

  // No renderices la app hasta que currentUser esté listo
  if (!currentUser) {
    return <div>Cargando usuario...</div>;
  }
  const handleOpenPopup = (card) => setSelectedCard(card);

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const handleUpdateAvatar = (data) => {
    api
      .AvatarUpdate(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        handleClosePopup();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Like de la tarjeta
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    const likePromise = isLiked
      ? api.removeLike(card._id)
      : api.addLike(card._id);

    likePromise
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(err));
  };

  //Eliminat tarjeta
  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.error(err));
  };

  const handleAppPlaceSubmit = (newCardData) => {
    api
      .addCard(newCardData)
      .then((newCard) => {
        setCards((prevCards) => [newCard, ...prevCards]);
        handleClosePopup();
      })
      .catch((err) => {
        console.error("Error al agregar tarjeta:", err);
      });
  };

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          onUpdateAvatar: handleUpdateAvatar,
          handleAppPlaceSubmit,
        }}
      >
        <div className="page">
          <Header />
          <Main
            cards={cards}
            setCards={setCards}
            onAddPlaceSubmit={handleAppPlaceSubmit}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={selectedCard}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
