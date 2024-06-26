import React, { useState, useEffect } from "react";
import deleteCard from "../../images/deleteCard.svg";
import deleteCardClick from "../../images/deleteCardClick.svg";
import { formatDate } from "../utils/validator";

function NewsCardList({ card, onDelete, index }) {
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteCardSrc, setDeleteCardSrc] = useState(deleteCard);

  const capitalizeAndLowercase = (word) => {
    const str = String(word);

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const capitalizeSearchQueries = capitalizeAndLowercase(card.searchQueries);

  function handleDeleteNewsCard() {
    if (showDeleteMessage) {
      onDelete();
      setIsDelete(false);
      setShowDeleteMessage(false);
    } else {
      setDeleteCardSrc(deleteCardClick);
      setShowDeleteMessage(true);
      setIsDelete(true);
    }
  }

  useEffect(() => {
    if (showDeleteMessage && isDelete) {
      setDeleteCardSrc(deleteCardClick);
    } else {
      setDeleteCardSrc(deleteCard);
    }
  }, [isDelete, showDeleteMessage]);

  return (
    <div>
      <div className="card" key={index}>
        <div className="card__header">
          <div className="card__icon-container">
            <img
              className="cardList__icon-delete"
              src={deleteCardSrc}
              alt={`Icono para eliminar tarjeta`}
              onClick={() => {
                handleDeleteNewsCard();
              }}
            />
          </div>
          {showDeleteMessage && (
            <div className="cardList__delete-message-container">
              <p className="cardList__delete-message">Remove from saved</p>
            </div>
          )}
          <div className="cardList__query-container">
            <p className="cardList__query-text">{capitalizeSearchQueries}</p>
          </div>
        </div>
        <img
          className="card__image"
          src={card.urlToImage}
          alt={card.title}
          style={{ backgroundImage: `url(${card.urlToImage})` }}
        />
        <div className="card__footer-image">
          <h4 className="card__date">{formatDate(card.publishedAt)}</h4>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__description">{card.description}</p>
          <p className="card__source">{card.sourceName}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCardList;
