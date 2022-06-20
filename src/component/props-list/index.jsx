import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import onDelete from './event-handle/onDelete';

const computeCnt = (props, state, loopArgs) => {
  return props.value.length;
};

export default (props) => {
  const ctx = {
    props
  };

  const compute = {
    cnt: computeCnt(ctx.props, ctx.state)
  };

  return (
    <div>
      <div>CNT: {compute.cnt}</div>
      {Array.isArray(props.value) && props.value.map((item, index) => {
        const loopCtx = { ...ctx, loopArgs: [{ item, index }] };
        return (
          <div key={index} style={{ display: 'flex' }}>
            <div style={{ width: 100 }}>Index: {item}</div>
            <Button onClick={onDelete.bind({ ctx: loopCtx })}>
              删除
            </Button>
          </div>
        );
      })}
    </div>
  );
};
