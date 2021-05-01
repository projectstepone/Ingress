const plasmaDonationSchema = {
    "id": "plasma-donation",
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
                            "id": "name",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Gender",
                            "id": "gender",
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
                            "id": "dateOfBirth",
                            "description": null,
                            "type": "date",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Mobile Number",
                            "id": "phone",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Alternate Mobile Number",
                            "id": 'altPhone',
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "City",
                            "id": "city",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "State",
                            "id": "state",
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
                            "id": "pinCode",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Have you donated Plasma before",
                            "id": "hasDonatedPlasma",
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
                            "id": "positiveDate",
                            "description": null,
                            "type": "date",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Date of Last Plasma donation",

                            "id": "lastDonationDate",
                            "description": null,
                            "type": "date",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Preferred Date for Plasma donation",
                            "id": "preferredDonationDate",
                            "description": null,
                            "type": "date",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Preferred Time for Plasma donation",
                            "id": "preferedDonationTime",
                            "description": null,
                            "type": "time",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "Do you need a cab ?",
                            "id": "cabrequired",
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
                            "id": "address",
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