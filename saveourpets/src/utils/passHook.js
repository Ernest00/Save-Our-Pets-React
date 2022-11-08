import React, { useState } from 'react';

export const passHook = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };

  export const passHook2 = () => {
    const [passwordVisibility2, setPasswordVisibility2] = useState(true);
    const [rightIcon2, setRightIcon2] = useState('eye');
  
    const handlePasswordVisibility2 = () => {
      if (rightIcon2 === 'eye') {
        setRightIcon2('eye-off');
        setPasswordVisibility2(!passwordVisibility2);
      } else if (rightIcon2 === 'eye-off') {
        setRightIcon2('eye');
        setPasswordVisibility2(!passwordVisibility2);
      }
    };
  
    return {
      passwordVisibility2,
      rightIcon2,
      handlePasswordVisibility2
    };
  };