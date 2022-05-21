import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>بابت سفارش شما متشکرم!</h2>
        <p className="email-msg">
          صندوق ورودی ایمیل خود را برای رسید بررسی کنید.
        </p>
        <p className="description">
          در صورت داشتن هر گونه سوالی لطفا ایمیل بفرستید
          <a className="email" href="mailto:order@example.com">
            VsCodeReza@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            صفحه اصلی
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
