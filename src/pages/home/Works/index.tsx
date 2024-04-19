import { useState, memo } from "react";
import { works } from "../texts";
import Work from "./Work";

const Works = () => {
     const [isBackDropOpen, setIsBackDropOpen] = useState(false)
     return (
          <>

               <div className={`backdrop ${isBackDropOpen ? 'backdrop-visible' : ''}`} />
               {
                    // prettier-ignore
                    works.map((workProps, i) => {
                         return (
                              <Work setIsBackDropOpen={setIsBackDropOpen} key={`${i} ${workProps.title}`} {...{...workProps , i}}/>
                         );
                    })
               }
          </>
     );
};

export default memo(Works);
