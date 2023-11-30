// components/TradingViewChart.js
"use client";
import React, { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    const container = document.getElementById("tradingview-container");

    if (container) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "BINANCE:USDT",
          "width": 770,
          "height": 400,
          "locale": "en",
          "dateRange": "12m",
          "colorTheme": "dark",
          "isTransparent": false,
          "showSymbolLogo": true,
          "largeChartUrl": "",
          "locale": "en"
        }
      `;
      container.appendChild(script);

      return () => {
        container.innerHTML = "";
      };
    }
  }, []);

  return <div id="tradingview-container" className="h-40 w-40 bg-goldenrod"/>;
};

export default TradingViewChart;
