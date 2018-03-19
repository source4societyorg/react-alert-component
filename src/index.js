import React from 'react';
import AlertStyles from './AlertStyles';
import { propTypes, defaultProps } from './props';

export default function Alert({
  alertType,
  className,
  children,
  showIcon,
  iconClass,
  ...props
}) {
  return (
    <AlertStyles className={`alert ${alertType} ${className}`} alertType={alertType} {...props}>
      {showIcon ? <span className={iconClass}></span> : null}
      <p>{children}</p>
    </AlertStyles>
  );
}

Alert.defaultProps = defaultProps;
Alert.propTypes = propTypes;
