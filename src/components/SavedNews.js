import React from "react";
import SavedNewsHeader from "./SavedNewsHeader";
import NewsCardList from "./NewsCardList";
import useNewsContext from "../hooks/useNewsContext";
import useUserContext from "../hooks/useUserContext";

function SavedNews({ isSavedNewsClicked }) {
  const { isLoggedIn } = useUserContext();
  const { savedCards, allSearchQueries, handleDeleteCard } = useNewsContext();

  const savedCardsCount = savedCards ? savedCards.length : 0;

  if (isLoggedIn && isSavedNewsClicked) {
    return (
      <section>
        <SavedNewsHeader
          savedCards={savedCards}
          savedCardsCount={savedCardsCount}
          allSearchQueries={allSearchQueries}
        />
        <div className="saved-news__cards">
          {savedCards.length > 0 ? (
            savedCards.map((card, index) => (
              <NewsCardList
                key={index}
                card={card}
                onDelete={() => handleDeleteCard(index)}
              />
            ))
          ) : (
            <p className="saved-news_NoCardsFound">
              No hay tarjetas guardadas.
            </p>
          )}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default SavedNews;
