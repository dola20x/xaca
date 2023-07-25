import { Button } from 'antd';
import React from 'react';

import './index.scss';

import Icon from '~/components/atoms/Icon';

const ExamplePage: React.FC = () => {
  console.log('protected');
  return (
    <div>
      Page ExamplePage
      <Icon iconName='user' size='24x24' />
      <Button>Test Button</Button>
    </div>
  );
};

export default ExamplePage;
