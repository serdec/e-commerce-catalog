import React from 'react';
import { array } from 'prop-types';
import ProductList__Item from './__Item/product-list__item';

const ProductList = ({ list = [] } = {}) => {
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   const getRes = async () => {
  //     const res = await fetch(
  //       'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0',
  //       {
  //         headers: {
  //           'accept-language': 'it',
  //           'Content-Type': 'application/json',
  //           'content-type': 'application/json',
  //           'x-musement-currency': 'EUR',
  //           'x-musement-version': '3.4.0',
  //         },
  //       }
  //     );
  //     const list = await res.json();
  //     setList(list);
  //   };
  //   getRes();
  // }, [list]);

  return (
    <ul className="product-list">
      {list.map((el) => (
        <ProductList__Item
          key={el.uuid}
          title={el.title}
          cover_image_url={el.cover_image_url}
          description={el.description}
          retail_price={el.retail_price.formatted_value}
          net_price={el.net_price?.formatted_value}
          discount={el.discount}
          inCart={el.inCart}
        />
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  list: array,
};

export default ProductList;
