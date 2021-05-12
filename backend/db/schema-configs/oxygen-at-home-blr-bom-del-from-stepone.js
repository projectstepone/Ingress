const oxygenAtHomeforBlrBomDelFromStepone = {
    "id": "oxygen-at-home-blr-bom-del-from-stepone",
    "item": [
        {
            "devNote": "",
            "Header": {},
            "Footer": {},
            "title": "Free Oxygen at Home",
            "description": "Free Oxygen at home for patients via Project StepOne",
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
                            "type": "dropdown",
                            "args": ["Bangalore", "Mumbai", "Delhi"],
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
                            "label": "If any, What are the patient's co-morbidities ?",
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
                            "label": "Do you have a BPL card ?",
                            "id": "haveBPLCard",
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



module.exports = oxygenAtHomeforBlrBomDelFromStepone;