// src/reportWebVitals.js

const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
<<<<<<< HEAD
      import('web-vitals').then(({ getCLS, getFID, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
=======
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
>>>>>>> 58f6f24fae42ada8a8524742eb250f1a0bc407fc
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  
  export default reportWebVitals;
  