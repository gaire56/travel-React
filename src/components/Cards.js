import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://i.pinimg.com/originals/dd/1a/7f/dd1a7fddc3590515a43b79b0bcdc9eda.jpg"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://img.jakpost.net/c/2016/05/20/2016_05_20_4913_1463727075._medium.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://static1.clickandboat.com/v1/home/d/pP44ysB93hzwvaRgJYgeDEp6S55e8rUE.jpg.gz'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://lh3.googleusercontent.com/-FbGxteqbTAw/WQbGcR2ARrI/AAAAAAABSdI/cf2O3I5S6SEPKsEQn_klKn3Wj3GKxURngCHM/w1200-h630-p-k-no-nu/henningsvr-stadion-46?imgmax=1600'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://magic-morocco-tours.co.uk/wp-content/uploads/2019/01/merzougaimage4_home.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;