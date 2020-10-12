import { compose } from 'ramda';
import withProductPage from './withProductPage';
import withLayout from './withLayout';

const page = compose(withLayout, withProductPage);

export default page;
