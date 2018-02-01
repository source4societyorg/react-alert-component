import React from 'react';
import PropTypes from 'prop-types';
import AlertStyle from 'styles/AlertStyle';

export default function Alert({
  alertType,
  ...props
}) {
  return (
    <AlertStyle className={`alert ${alertType}`} alertType={alertType} {...props}>
      {props.showIcon ? <span className={props.iconClass}></span> : null}
      <p>{props.children}</p>
    </AlertStyle>
  );
}

Alert.defaultProps = {
  showIcon: false,
  iconClass: null,
  children: [],
};

Alert.propTypes = {
  showIcon: PropTypes.bool,
  iconClass: PropTypes.string,
  children: PropTypes.any,
  alertType: PropTypes.string,
};
