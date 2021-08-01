import React, { useEffect, useState } from "react"

function getWindowSizes() {
   const { clientWidth: width, clientHeight: height } = document.documentElement
   return {
      width,
      height
   }
};

const WithWindowSizes = (Component) => {

   function WithWindowSizesComponent(props) {
      const [windowSizes, setWindowSizes] = useState(getWindowSizes());

      useEffect(() => {
         function handleResize() {
            setWindowSizes(getWindowSizes)
         };

         window.addEventListener('resize', handleResize);
         return () => window.removeEventListener('resize', handleResize);
      }, [])

      return (
         <Component
            {...props}
            windowWidth={windowSizes.width}
            windowHeight={windowSizes.height}
         />
      )
   };

   return WithWindowSizesComponent;
}

export default WithWindowSizes;