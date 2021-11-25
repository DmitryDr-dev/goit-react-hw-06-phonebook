// package import
import PropTypes from 'prop-types';

// styles import
import './Section.css';

function Section({ title, children }) {
  return (
    <section className="section">
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired, // ?? node
};

export default Section;
