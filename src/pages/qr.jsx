import React from "react";

import { QRCodeCanvas } from "qrcode.react";

const Qr = () => {
  return (
    <div>
      <QRCodeCanvas value="https://reactjs.org/" />,
    </div>
  );
};

export default Qr;
