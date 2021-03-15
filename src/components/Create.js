import { Input, Typography, Button } from 'antd';
import React from 'react';

const { TextArea } = Input;
const { Title } = Typography;

function Create({ title }) {
  return (
    <div className="container">
      <Title level={3}>{title}</Title>
      <Input placeholder="Title" />
      <TextArea rows={4} />
      <Button>취소</Button>
      <Button type="primary">생성</Button>
    </div>
  );
}

export default Create;
