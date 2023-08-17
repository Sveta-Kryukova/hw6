function onScroll(event) {  
  // Handle scroll event  
  console.log("Scroll event:", event);  
  }  
    
  const throttledScrollHandler = throttle(onScroll, 1000);  
    
  window.addEventListener("scroll", throttledScrollHandler);

  function throttle(func, interval) {
    let timer;
  
    return function (...args) {
      if (!timer) {
        func.apply(this, args);
        timer = setTimeout(() => {
          timer = null;
        }, interval);
      }
    };
  }