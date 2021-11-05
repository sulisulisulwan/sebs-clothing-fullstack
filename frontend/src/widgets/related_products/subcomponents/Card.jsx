import React from 'react';
import ActionButton from '../../../shared_components/ActionButton.jsx'
import Stars from '../../../shared_components/Stars.jsx'

const Card = (props) => {
  let { parentClassName, productData, cardOptions } = props;
  let { id, category, price, name } = productData;
  let defaultStyle = productData.styles[productData.defaultStyleIndex]
  let defaultThumbnailUrl = defaultStyle.photos === null ? 'assets/no_thumbnail.jpg' : defaultStyle.photos[0].thumbnail_url;

  const onClickWrapper = (e) => {
    if (e.target.className === 'related-products-related-cards-card-action-button-star') {
      return;
    }
    cardOptions.onClickHandler(id, cardOptions);
  }

  return (
    <div className={`card ${parentClassName}`} onClick={onClickWrapper}>
      <div className={`card-image-wrapper ${parentClassName}`}>
        <img className={`card-image ${parentClassName}`} src={defaultThumbnailUrl} alt={'Product Image'}></img>
      </div>
      {cardOptions.actionOnClick ? <ActionButton parentClassName={`${parentClassName}-card`} onClickHandler={cardOptions.actionOnClick}/>: null}
      <div className={ `card-details-wrapper ${parentClassName}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Card;