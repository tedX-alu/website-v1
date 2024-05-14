import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Footer } = Layout;
const { Text, Title } = Typography;

const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: 'black', color: 'white', padding: '24px' }}>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Title level={4} style={{ color: 'white' }}>
            SPREAD THE IDEAS
          </Title>
          <Text>
            Driven by the aspiration to provide the student community with cutting-edge and captivating concepts
          </Text>
          <Divider style={{ backgroundColor: 'white' }} />
          <Text>We're on social media networks! Follow us on:</Text>
          <Space>
            <LinkedinOutlined style={{ fontSize: '24px' }} />
            <TwitterOutlined style={{ fontSize: '24px' }} />
          </Space>
        </Col>
        <Col span={12}>
          <div className="flex flex-col items-end">
        
            <div className="mt-4">
              <Text>
                Bumbogo, Kigali Innovation City, Next to Azam, Kigali, Rwanda
                Phone: +250 784 650 219
              </Text>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={{ backgroundColor: 'white' }} />
      <Row justify="space-between">
        <Col>
          <Text>
            Copyright &copy; 2023 All rights reserved | Made with &hearts; by
            TedxALU | This independent TEDx event is operated under license from
            TED.
          </Text>
        </Col>
        <Col>
          <Link href="#" className="text-white">
            Back to Top
          </Link>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;