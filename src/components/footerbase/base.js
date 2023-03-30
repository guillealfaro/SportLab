import React from "react";
import "../footerbase/base.scss";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');
</style>;

const FooterBase = () => {
  return (
    <div className="base">
      <div className="top">
        <div className="sport">
          <a href="">Sport Lab </a>
        </div>
        <div>
          <a href="">|</a>
        </div>
        <div className="nutri">
          <a href="">Nutri Lab</a>
        </div>
      </div>
      <div className="bottom">
        <a href="" className="owner">
          Website design by BroCode.
        </a>
      </div>
    </div>
  );
};
export default FooterBase;
