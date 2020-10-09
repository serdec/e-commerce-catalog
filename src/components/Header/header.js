import React from 'react';
import { any } from 'prop-types';
import PageTitle from '../Page-title/page-title';
import HeaderBag from '../HeaderBag/header-bag';
import HeaderBag__Item from '../HeaderBag/__Item/header-bag__item';
import HeaderBag__Count from '../HeaderBag/__Count/header-bag__count';
import HeaderBag__Price from '../HeaderBag/__Price/header-bag__price';
import BagIcon from '../Icons/bag-icon';
import Bag__Item from '../Bag/__Item/bag__item';
import HeaderBag__WishlistCount from '../HeaderBag/__WishlistCount/header-bag__wishlist-count';
import WhishListIcon from '../Icons/whishlist-icon';

const Header = () => (
  <header className="header container">
    <PageTitle content={'BRAND'} />
    <HeaderBag>
      <HeaderBag__Item>
        <HeaderBag__Count>
          <HeaderBag__Price value={210} />
          <BagIcon />
          <Bag__Item value={10} isCounter={true} />
        </HeaderBag__Count>
      </HeaderBag__Item>
      <HeaderBag__Item>
        <HeaderBag__WishlistCount>
          <WhishListIcon />
          <Bag__Item value={10} isCounter={true} />
        </HeaderBag__WishlistCount>
      </HeaderBag__Item>
    </HeaderBag>
  </header>
);

export default Header;
