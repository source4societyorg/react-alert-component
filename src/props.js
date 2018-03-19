import PropTypes from 'prop-types';

export const defaultProps = {
  showIcon: false,
  iconClass: null,
  children: [],
  className: '',
};

export const propTypes = {
  showIcon: PropTypes.bool,
  iconClass: PropTypes.string,
  children: PropTypes.any,
  alertType: PropTypes.string,
  className: PropTypes.string,
};
