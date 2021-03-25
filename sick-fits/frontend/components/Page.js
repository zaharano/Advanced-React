import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>Iam a pagerrsr</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};
