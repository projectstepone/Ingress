import React from 'react';
// import PropTypes from "prop-types";

import { Form, Input, Checkbox, Radio, Row, Col, Select, DatePicker, TimePicker } from 'antd';

const { TextArea } = Input;
const { Option } = Select;


const formCompositionHandler = ( props ) => {

    const { fieldContext } = props;

    // Check for possible types of form fields
    // If the prop value is of a particular type of field, return a react element that makes use of the prop values
    // Handle all possible prop types for an individual element of field and a field only
    // Each field has the following schema:
    // {
    //     "label": String,
    //     "description": String,
    //     "type": enum["short_answer", "paragraph", "radio","multiple_choice","dropdown", "Date", "time" ],
    //     "args": enum[],
    //     "validators": enum[],
    //     "answerType": enum[],
    //     "required": Boolean
    //   }

    // Args are to be present only for radio, multiple_choice, dropdown, time and date options
    // Args will be possible options in the form of Strings that are to be displayed in the form for the user to choose. In case of date and time, it will be ranges: Date and time formats are TBD
    // Validators will be outsourced to a validator library; TBD
    // AnswerType: TBD
    // Required will always bear a boolean value; It is presumed false / option field if not specified.


    return (

        <div>

            {( () => {
                switch ( fieldContext.type ) {
                    case "short_answer":
                        return (
                            <div>
                                <Form.Item
                                    label={fieldContext.label}
                                    name={fieldContext.id}
                                    rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                                >
                                    <Input />
                                </Form.Item>


                            </div>
                        );

                    case "paragraph":
                        return (
                            <div>
                                <Form.Item
                                    label={fieldContext.label}
                                    name={fieldContext.id}
                                    rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                                >
                                    <TextArea placeholder={props.placeholder} rows={4} />
                                </Form.Item>
                            </div>
                        );

                    case "radio":
                        return (
                            <Form.Item
                                label={fieldContext.label}
                                name={fieldContext.id}
                                rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                            >
                                <Radio.Group>
                                    {fieldContext.args.map( ( option, key ) => (
                                        <Radio key={key} style={{
                                            display: 'block',
                                            height: '30px',
                                            lineHeight: '30px',
                                        }} value={option}>
                                            {option}
                                        </Radio>
                                    ) )}
                                </Radio.Group>
                            </Form.Item> );
                    case "multiple_choice":
                        return (
                            <Form.Item
                                label={fieldContext.label}
                                name={fieldContext.id}
                                rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                            >
                                <Checkbox.Group style={{ width: '100%' }} >
                                    <Row>
                                        {fieldContext.args.map( ( option, key ) => (
                                            <Col span={12} key={key}>
                                                <Checkbox value={option}>{option}</Checkbox>
                                            </Col>
                                        ) )}
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>
                        );
                    case "dropdown":
                        return (
                            <Form.Item
                                label={fieldContext.label}
                                name={fieldContext.id}
                                rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                            >
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    allowClear="true"
                                    filterOption={( input, option ) =>
                                        option.children.toLowerCase().indexOf( input.toLowerCase() ) >= 0
                                    }
                                >
                                    {fieldContext.args.map( ( option, key ) => (
                                        <Option value={option} key={key}>{option}</Option>
                                    ) )}

                                </Select>
                            </Form.Item>
                        );

                    case "date":
                        return (
                            <Form.Item
                                label={fieldContext.label}
                                name={fieldContext.id}
                                rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                            >
                                <DatePicker style={{ "width": "100%" }} format={'DD/MM/YYYY'} allowClear={true} />
                            </Form.Item> );
                    case "time":
                        return (
                            <Form.Item
                                label={fieldContext.label}
                                name={fieldContext.id}
                                rules={[{ required: fieldContext.required, message: 'This is a required field' }]}
                            >
                                <TimePicker style={{ "width": "100%" }} mode="time" allowClear={true} format="hh:mm a" />
                            </Form.Item>
                        );
                    default:
                        // Show nothing if type does not match any of predefined items in schema 
                        break;
                }


            } )()}

        </div> );

};


// formCompositionHandler.propTypes = {
//     label: PropTypes.string,
//     "description": PropTypes.string,
//     // "type": PropTypes.oneOf["short_answer", "paragraph", "radio", "multiple_choice", "dropdown", "date", "time"].isRequired,
//     "args": PropTypes.arrayOf( PropTypes.string ),
//     "validators": PropTypes.arrayOf( PropTypes.string ),
//     // "answerType": enum[],
//     "required": PropTypes.bool
// };

export default formCompositionHandler;
