import { compose } from 'ramda';
import withProductPage from './withProductPage';
import withLayout from './withLayout';
import withMeta from './withMeta';

const page = compose(withMeta, withLayout, withProductPage);

export default page;
