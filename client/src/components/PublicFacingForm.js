import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Form, Checkbox, Button, Image, Divider, Modal, Row, Col } from 'antd';

import axios from 'axios';

import STEPONE_LOGO from "../assets/StepOne-logo-300x83.png";
import FormCompositionHandler from '../utils/formCompositionHandler';

const PublicFacingForm = () => {

    let { id } = useParams();

    const [schema, setSchema] = useState( null );
    const [formId, setformId] = useState( null );
    const [isModalVisible, setIsModalVisible] = useState( { state: false, context: null, message: null } );

    useEffect( () => {
        let config = {
            method: 'get',
            url: `/config/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {}
        };

        axios( config )
            .then( function ( response ) {
                if ( response.data.status !== 200 ) {
                    window.location = "/404";
                }

                console.log( response.data.id );

                setformId( response.data.id );
                setSchema( response.data.item[0] );

            } )
            .catch( function ( error ) {
                console.log( error );
            } );
        return () => {

        };
    }, [id] );

    const onFinish = ( values ) => {

        console.log( JSON.stringify( values, null, 2 ) );
        // mapFormSubmissionValues( formId, values );
        // Show an Indication that the form was submitted and send to Homepage

        let config = {
            method: 'post',
            url: `/form/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: { formId, values }
        };

        axios( config )
            .then( function ( response ) {
                if ( response.data.status !== 200 ) {
                    // Show error
                    setIsModalVisible( { state: true, context: "Error", message: "There seems to be an error with your form submission. Kindly try again. Thank you" } );

                } else {
                    // Show success message and redirect
                    setIsModalVisible( { state: true, context: "Success", message: "Thank you for submitting your details. We shall reach out to you soon." } );
                }
            } )
            .catch( function ( error ) {
                console.log( error );
            } );
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

            {isModalVisible.state
                &&
                <Modal title={isModalVisible.context} visible={isModalVisible.state} footer={null} closable={false} >{isModalVisible.message} </Modal>
            }
            {
                schema == null ? null : (
                    <>
                        <Row>
                            <Col offset={6} span={12} style={{ "textAlign": "center" }}>
                                <Divider orientation="center" style={{ "width": "100%" }} />
                                <h2>
                                    {schema.title}
                                </h2>
                                <h4>
                                    {schema.description}
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
                                    {( schema.groups[0].fields.map( ( field, index ) => (
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