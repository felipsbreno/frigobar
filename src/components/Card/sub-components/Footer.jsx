import styled from 'styled-components';
import PropTypes from 'prop-types';

const alignDictionary = {
  left: 'flex-start',
  right: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
};

const Footer = styled.footer`
  display: flex;
  padding: 8px 16px 16px;
  ${({ align }) => `justify-content: ${alignDictionary[align]};`}
`;

Footer.displayName = 'Card.Footer';

Footer.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'space-between', 'space-around']),
};

Footer.defaultProps = {
  align: 'left',
};

export default Footer;
