import React, { useEffect, useState } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import PageTitle from '../Page-title/page-title';
import HeaderBag from '../HeaderBag/header-bag';
import HeaderBag__Item from '../HeaderBag/__Item/header-bag__item';
import HeaderBag__Count from '../HeaderBag/__Count/header-bag__count';
import HeaderBag__Price from '../HeaderBag/__Price/header-bag__price';
import BagIcon from '../Icons/bag-icon';
import Bag__Item from '../Bag/__Item/bag__item';
import HeaderBag__WishlistCount from '../HeaderBag/__WishlistCount/header-bag__wishlist-count';
import WhishListIcon from '../Icons/whishlist-icon';
import { getBagTotal, getNumberOfProductsInBag } from '../Bag/reducer';
import { getNumberOfProductsInWishlist } from '../Wishlist/reducer';

const mapStateToProps = (state) => ({
  bag_numberOfProducts: getNumberOfProductsInBag(state.bag),
  bag_total: getBagTotal(state.bag),
  wishlist_numberOfProducts: getNumberOfProductsInWishlist(state.wishlist),
});
const Header = ({
  bag_numberOfProducts = 0,
  bag_total = 0,
  wishlist_numberOfProducts = 0,
} = {}) => {
  const [numberOfProductsInBag, setNumberOfProductsInBag] = useState(0);
  const [bagTotal, setBagTotal] = useState(0);
  const [numberOfProductsInWishlist, setNumberOfProductsInWishlist] = useState(
    0
  );

  useEffect(() => {
    setNumberOfProductsInBag(bag_numberOfProducts);
    setBagTotal(bag_total);
    setNumberOfProductsInWishlist(wishlist_numberOfProducts);
  }, [bag_numberOfProducts, bag_total, wishlist_numberOfProducts]);

  return (
    <header className="header container">
      <PageTitle content={'BRAND'} />
      <HeaderBag>
        <HeaderBag__Item>
          <HeaderBag__Count>
            <HeaderBag__Price value={bagTotal} />
            <BagIcon />
            <Bag__Item value={numberOfProductsInBag} isCounter={true} />
          </HeaderBag__Count>
        </HeaderBag__Item>
        <HeaderBag__Item>
          <HeaderBag__WishlistCount>
            <WhishListIcon />
            <Bag__Item value={numberOfProductsInWishlist} isCounter={true} />
          </HeaderBag__WishlistCount>
        </HeaderBag__Item>
      </HeaderBag>
    </header>
  );
};

Header.propTypes = {
  bag_numberOfProducts: number,
  bag_total: number,
  wishlist_numberOfProducts: number,
};
export default connect(mapStateToProps)(Header);
