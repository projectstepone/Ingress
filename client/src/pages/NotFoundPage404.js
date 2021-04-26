import React from 'react';
import { Result, Button, Row, Col, Image } from 'antd';
import STEPONE_LOGO from "../assets/StepOne-logo-300x83.png";

const NotFoundPage404 = () => {

    return (
        <div>
            <Row justify="center" style={{ "marginTop": "0rem" }}>
                <Col>
                    <Image
                        width={200}
                        src={STEPONE_LOGO}
                        preview={false}
                        style={{ "marginTop": "1rem" }}
                    />
                </Col>
            </Row>

            {/* 404
            Page not found */}
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => { window.location.href = "https://projectstepone.org/"; }}>Back Home</Button>}
            />
        </div>
    );
};

export default NotFoundPage404;
