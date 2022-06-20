import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import onClick from './event-handle/onClick';
import onChange from './event-handle/onChange';

export default (props) => {
  const [cnt, setCnt] = useState(0);
  const ctx = {
    state: { cnt },
    setState: (key, value) => {
      key === "cnt" && setCnt(value);
    }
  };

  return (
    <div>
      <div>{cnt}</div>
      <Input value={cnt} onChange={onChange.bind({ ctx })} />
      <Button onClick={onClick.bind({ ctx: ctx })}>点击+1</Button>
    </div>
  );
};
