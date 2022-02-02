import React from 'react';
import styles from './button.module.css';

const Button = ({ children, onClick, btnColor = 'lightGray', label = '', labelColor, disabled, type, style, ...props }) => {
  return (
    <div className={styles.btn} style={{ backgroundColor: btnColor }} >
      {children || label}
    </div>
  );
};

export default Button;