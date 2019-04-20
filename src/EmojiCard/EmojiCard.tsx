import React, { PureComponent } from "react";

import { Card } from "antd";
import "antd/dist/antd.css";

type Props = {
    text: string;
}

export default class EmojiCard extends PureComponent<Props> {
  render() {
    const { text } = this.props;

    return (
        <Card>
            <p>{text}</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
  }
}