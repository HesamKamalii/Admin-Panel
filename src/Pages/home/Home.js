import React from "react";
import Features from "../../components/saleFeature/Features";
import Charts from "../../components/chart/Charts";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { xAxixData } from "../../datas"; 


import './Home.css'

export default function Home() {
  return (
    <div className="home-div">
      <Features />
      <Charts grid title = 'Month Sales' data= {xAxixData} dataKey= "sale" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    
    </div>
  );
}
