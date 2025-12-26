import React from 'react';
import './TechStack.css';


{/*
import RadStudio from '../../assets/stack/radstudio.svg';
import FastReport from '../../assets/stack/fastreport.svg';
import UniGUI from '../../assets/stack/unigui.svg';
import MySQL from '../../assets/stack/mysql.svg';
import SQLServer from '../../assets/stack/sqlserver.svg';
*/}

const TechStack = () => {
  return (
    <section className="stack__section" id="techStack">
      <h3 className="section__title">Tech Stack |</h3>
      <div className="stack__content">
        <img src='https://d2ohlsp9gwqc7h.cloudfront.net/images/logos/logo-page/delphi-logo-1024.png'alt="Delphi Logo" className="Logo_img my-3" />
        <img src='https://d2ohlsp9gwqc7h.cloudfront.net/images/logos/logo-page/rad-studio-logo-1024.png'alt="Delphi Logo" className="Logo_img my-3" />
        <img src='https://forums.unigui.com/uploads/monthly_2020_10/new512_logo.thumb.png.eb568e897d7cabf1d45f0f47a29ca6a6.png'alt="Delphi Logo" className="Logo_img my-3" />
        <img src='https://avatars.githubusercontent.com/u/1180605?s=200&v=4'alt="Delphi Logo" className="Logo_img my-3" />
        <img src='https://i0.wp.com/datamodel.com/wp-content/uploads/2025/05/ssms_21.png?fit=512%2C512&ssl=1'alt="Delphi Logo" className="Logo_img my-3" />
        <img src='https://cdn.icon-icons.com/icons2/1381/PNG/512/mysqlworkbench_93532.png'alt="Delphi Logo" className="Logo_img my-3" />
      </div>
    </section>
  );
};

export default TechStack;
