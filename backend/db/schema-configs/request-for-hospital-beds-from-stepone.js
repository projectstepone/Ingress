const requestForHospitalBedsFromStepone = {
    "id": "request-for-hospital-beds-from-stepone",
    "item": [
        {
            "devNote": "",
            "Header": {},
            "Footer": {},
            "title": "Hospital Beds",
            "description": "Request for Hospital beds via Project StepOne",
            "groups": [
                {
                    "fields": [
                        {
                            "label": "Name of the Patient",
                            "id": "patientName",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        // {
                        //     "label": "Age",
                        //     "id": "age",
                        //     "description": null,
                        //     "type": "short_answer",
                        //     "args": [],
                        //     "validators": [],
                        //     "answerType": [],
                        //     "required": false
                        // },
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
                            "label": "BU number",
                            "id": "buNumber",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "ICMR number",
                            "id": "icmrNumber",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "SRF ID",
                            "id": "srfId",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
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
                        },
                        {
                            "label": "Are you covid positive ?",
                            "id": "isCovidPositive",
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
                            "label": "Does the patient have any co-morbidities ?",
                            "id": "comorbidity",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Yes",
                                "No",
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "If any, What are the patient's comorbidities ?",
                            "id": "comorbidity",
                            "description": null,
                            "type": "paragraph",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },

                        {
                            "label": "is the patient vaccinated ?",
                            "id": "vaccineStatus",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Yes",
                                "No",
                                "Partially"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "What is the patient's SPO2 level ?",
                            "id": "spo2level",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "What is the patient's condition ?",
                            "id": "patientCondition",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
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
                            "label": "Caretaker Contact Number",
                            "id": 'caretakerContactNumber',
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Caretaker Contact Name",
                            "id": 'caretakerContactName',
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Would you be able to pay for a Private hospital bed ?",
                            "id": "payingCapacityForPrivateHospital",
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
                            "label": "What is the type of Bed required ?",
                            "id": "requiredBedType",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Normal ward",
                                "HDU (Oxygen)",
                                "ICU",
                                "ICU with Ventilator"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },

                        {
                            "label": "Requester Name",
                            "id": 'requesterName',
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Requester Contact Number",
                            "id": 'requesterContactNumber',
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },

                    ]
                }
            ]
        }
    ]
};



module.exports = requestForHospitalBedsFromStepone;