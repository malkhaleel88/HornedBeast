import React from "react";

import HornedBeasts from "./HornedBeasts";
import DataArray from "./data.json";

class Main extends React.Component {

  render() {
    return (
      <div>
        {DataArray.map((values) => {
          return (
            <HornedBeasts
              title={values.title}
              image_url={values.image_url}
              description={values.description}
              keyword={values.keyword}
              horns={values.horns}          
            />        
          );
        })}
      </div>

    );
  }

}

export default Main;
