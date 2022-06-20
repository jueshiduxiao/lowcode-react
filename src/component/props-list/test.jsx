import React, { useState } from "react";
import Component from "./index";

export default (props) => {
  const [value, setValue] = useState([
    1, 2, 3, 4, 5
  ]);

  return <Component value={value}
                    onChange={(value) => setValue(value)} />;
};
