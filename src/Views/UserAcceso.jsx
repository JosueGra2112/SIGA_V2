// src/Views/TablaExp.jsx
import React from 'react';
import Expedientes from './Repo/TBL/tblacceso';
import Header from './HeaderSe';
import Menu from './Repo/MenuAd';
import Breadcrumbs from './BreadcrumbsLog'

const TablaExp = () => {
  return (

<div>
<Header />
<Menu />
<Breadcrumbs />
      <center><h1>Control de Acceso</h1></center>
      <Expedientes />
    </div>
  );
};

export default TablaExp;
