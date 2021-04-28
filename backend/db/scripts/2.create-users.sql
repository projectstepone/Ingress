INSERT INTO users (email, password, isActive, isAdmin)
VALUES ("prahalad@projectstepone.org",
        "dsdfdsdsfdsfsdfergjnermgjbva",
        1,
        1);

INSERT INTO formConfiguration(form_config_id, schema, created_by)
VALUES ('prahalad@projectstepone.org',
        '{\r\n    \"item\": [\r\n        {\r\n            \"devNote\": \"\",\r\n            \"Header\": {},\r\n            \"Footer\": {},\r\n            \"title\": \"Plasma Donation\",\r\n            \"description\": \"Voluntary Plasma Donation Drive via Project StepOne\",\r\n            \"groups\": [\r\n                {\r\n                    \"fields\": [\r\n                        {\r\n                            \"label\": \"Name\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"Gender\",\r\n                            \"description\": null,\r\n                            \"type\": \"dropdown\",\r\n                            \"args\": [\r\n                                \"Male\",\r\n                                \"Female\",\r\n                                \"Others\"\r\n                            ],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"Date Of Birth\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": false\r\n                        },\r\n                        {\r\n                            \"label\": \"Mobile Number\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"Alternate Mobile Number\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"City\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"State\",\r\n                            \"description\": null,\r\n                            \"type\": \"dropdown\",\r\n                            \"args\": [\r\n                                \"Andhra Pradesh\",\r\n                                \"Arunachal Pradesh\",\r\n                                \"Assam\",\r\n                                \"Bihar\",\r\n                                \"Chhattisgarh\",\r\n                                \"Goa\",\r\n                                \"Gujarat\",\r\n                                \"Haryana\",\r\n                                \"Himachal Pradesh\",\r\n                                \"Jammu and Kashmir\",\r\n                                \"Jharkhand\",\r\n                                \"Karnataka\",\r\n                                \"Kerala\",\r\n                                \"Madhya Pradesh\",\r\n                                \"Maharashtra\",\r\n                                \"Manipur\",\r\n                                \"Meghalaya\",\r\n                                \"Mizoram\",\r\n                                \"Nagaland\",\r\n                                \"Odisha\",\r\n                                \"Punjab\",\r\n                                \"Rajasthan\",\r\n                                \"Sikkim\",\r\n                                \"Tamil Nadu\",\r\n                                \"Telangana\",\r\n                                \"Tripura\",\r\n                                \"Uttarakhand\",\r\n                                \"Uttar Pradesh\",\r\n                                \"West Bengal\",\r\n                                \"Andaman and Nicobar Islands\",\r\n                                \"Chandigarh\",\r\n                                \"Dadra and Nagar Haveli\",\r\n                                \"Daman and Diu\",\r\n                                \"Delhi\",\r\n                                \"Lakshadweep\",\r\n                                \"Puducherry\"\r\n                            ],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"PinCode\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"Have you donated Plasma before\",\r\n                            \"description\": null,\r\n                            \"type\": \"dropdown\",\r\n                            \"args\": [\r\n                                \"Yes\",\r\n                                \"No\"\r\n                            ],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        },\r\n                        {\r\n                            \"label\": \"Date of testing Covid Positive\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": false\r\n                        },\r\n                        {\r\n                            \"label\": \"Date of Last Plasma donation\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": false\r\n                        },\r\n                        {\r\n                            \"label\": \"Preferred Date for Plasma donation\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": false\r\n                        },\r\n                        {\r\n                            \"label\": \"Preferred Time for Plasma donation\",\r\n                            \"description\": null,\r\n                            \"type\": \"short_answer\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": false\r\n                        },\r\n                        {\r\n                            \"label\": \"Do you need a cab ?\",\r\n                            \"description\": null,\r\n                            \"type\": \"dropdown\",\r\n                            \"args\": [\r\n                                \"Yes\",\r\n                                \"No\"\r\n                            ],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": false\r\n                        },\r\n                        {\r\n                            \"label\": \"Address\",\r\n                            \"description\": null,\r\n                            \"type\": \"paragraph\",\r\n                            \"args\": [],\r\n                            \"validators\": [],\r\n                            \"answerType\": [],\r\n                            \"required\": true\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}',
        1);