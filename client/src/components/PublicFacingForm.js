import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col } from 'antd';
import { Form, Checkbox, Button, Image, Divider } from 'antd';

import axios from 'axios';

import STEPONE_LOGO from "../assets/StepOne-logo-300x83.png";
import FormCompositionHandler from '../utils/formCompositionHandler';

const PublicFacingForm = () => {

    let { id } = useParams();

    const [schema, setSchema] = useState( null );
    const [formId, setformId] = useState( null );

    useEffect( () => {
        fetch();
        return () => {

        };
    } );

    let fetch = () => {
        var config = {
            method: 'get',
            url: `/config/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {}
        };

        axios( config )
            .then( function ( response ) {
                if ( response.data.status !== 200 || response.data.result.length === 0 ) {
                    window.location = "/404";
                }

                let obj = response.data.result[0];
                setformId( obj.form_config_id );
                setSchema( JSON.parse( obj.schema ) );

            } )
            .catch( function ( error ) {
                console.log( error );
            } );
    };


    const onFinish = ( values ) => {
        console.log( 'Success:', values, formId );

        // Show an Indication that the form was submitted and send to Homepage
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
    };

    return (
        <div>
            <Row justify="center" style={{ "marginTop": "0rem" }}>
                <Col>

                    <Divider />
                    <Image
                        width={200}
                        src={STEPONE_LOGO}
                        preview={false}
                    />
                    <Divider />
                </Col>
            </Row>

            {
                schema == null ? null : (
                    <>
                        <Row>
                            <Col offset={6} span={12} style={{ "textAlign": "center" }}>
                                <Divider orientation="center" style={{ "width": "100%" }} />
                                <h2>
                                    {schema.item[0].title}
                                </h2>
                                <h4>
                                    {schema.item[0].description}
                                </h4>
                                <Divider orientation="center" style={{ "width": "100%" }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col offset={6} span={12}>

                                <Form
                                    // layout="vertical"
                                    layout="vertical"
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    {( schema.item[0].groups[0].fields.map( ( field, index ) => (
                                        <div key={index}>
                                            <FormCompositionHandler fieldContext={field} />
                                        </div>
                                    ) ) )
                                    }
                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox>By checking this box, I consent to receive communication from Project Stepone.</Checkbox>
                                    </Form.Item>

                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                            </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </>
                )
            }

        </div>
    );
};
export default PublicFacingForm;