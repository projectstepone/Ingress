const plasmaDonationSchema = {
    "id": "generic-schema",
    "item": [
        {
            "devNote": "",
            "Header": {},
            "Footer": {},
            "title": "Plasma Donation",
            "description": "Voluntary Plasma Donation Drive via Project StepOne",
            "groups": [
                {
                    "fields": [
                        {
                            "label": "Name",
                            "id": "",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Gender",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Male",
                                "Female",
                                "Others"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Date Of Birth",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Mobile Number",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Alternate Mobile Number",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "City",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "State",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Andhra Pradesh",
                                "Arunachal Pradesh",
                                "Assam",
                                "Bihar",
                                "Chhattisgarh",
                                "Goa",
                                "Gujarat",
                                "Haryana",
                                "Himachal Pradesh",
                                "Jammu and Kashmir",
                                "Jharkhand",
                                "Karnataka",
                                "Kerala",
                                "Madhya Pradesh",
                                "Maharashtra",
                                "Manipur",
                                "Meghalaya",
                                "Mizoram",
                                "Nagaland",
                                "Odisha",
                                "Punjab",
                                "Rajasthan",
                                "Sikkim",
                                "Tamil Nadu",
                                "Telangana",
                                "Tripura",
                                "Uttarakhand",
                                "Uttar Pradesh",
                                "West Bengal",
                                "Andaman and Nicobar Islands",
                                "Chandigarh",
                                "Dadra and Nagar Haveli",
                                "Daman and Diu",
                                "Delhi",
                                "Lakshadweep",
                                "Puducherry"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "PinCode",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Have you donated Plasma before",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Yes",
                                "No"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Date of testing Covid Positive",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Date of Last Plasma donation",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Preferred Date for Plasma donation",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Preferred Time for Plasma donation",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Do you need a cab ?",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Yes",
                                "No"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Address",
                            "description": null,
                            "type": "paragraph",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        }
                    ]
                }
            ]
        }
    ]
};



module.exports = plasmaDonationSchema;