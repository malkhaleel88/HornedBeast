import React from "react";

import HornedBeasts from "./HornedBeasts";
import DataArray from "./data.json";
import Row from "react-bootstrap/Row";

class Main extends React.Component {

  render() {
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
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
        </Row>
      </div>

    );
  }

}

export default Main;
