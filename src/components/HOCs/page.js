import { compose } from 'ramda';
import withProductPage from '../ProductPage/withProductPage';
import withLayout from './withLayout';

const page = compose(withLayout, withProductPage);

export default page;
