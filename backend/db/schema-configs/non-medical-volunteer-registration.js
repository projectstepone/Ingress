const nonMedicalVolunteerRegistration = {
    "id": "non-medical-volunteer-registration",
    "item": [
        {
            "devNote": "",
            "Header": {},
            "Footer": {},
            "title": "Non Medical Volunteer Registration",
            "description": "Register to volunteer for Project StepOne as a Non Medical Volunteer",
            "groups": [
                {
                    "fields": [
                        {
                            "label": "Full Name",
                            "id": "name",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Email",
                            "id": "email",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Are you applying for an Internship ?",
                            "id": "internshipApplicant",
                            "description": null,
                            "type": "radio",
                            "args": [
                                "Yes",
                                "No",
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "If yes, Enter name of Institution",
                            "id": "institution",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Contact Number",
                            "id": "contact",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Select StepOne Department of interest for you",
                            "id": "state",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Tele-calling/Tele-counselling",
                                "Operations",
                                "Volunteer Success Team",
                                "State Focal Team",
                                "Marketing",
                                "Data Analytics",
                                "State Sign-up Team",
                                "Product Management",
                                "Technology",
                                "Others",
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "If Others, Kindly indicate what you would like to work on",
                            "id": "positiveDate",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },

                        {
                            "label": "Link to your LinkedIn Profile",
                            "id": "linkedinURL",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Number of hours per day you are available to volunteer (please indicate availability timings as well)",
                            "id": "availability",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Where did you hear about Project StepOne from",
                            "id": "hasDonatedPlasma",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Newspaper Ad",
                                "Social Media",
                                "SMS",
                                "Friend",
                                "Word of Mouth",
                                "Others"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "If Others, let us know from where you heard about Project StepOne ",
                            "id": "positiveDate",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        // {
                        //     "label": "I am interested in receiving updates and communication via Whatsapp and email from Project StepOne",

                        //     "id": "consentToReceiveCommunication",
                        //     "description": null,
                        //     "type": "radio",
                        //     "args": [
                        //         "Yes",
                        //         "No",
                        //     ],
                        //     "validators": [],
                        //     "answerType": [],
                        //     "required": false
                        // },
                    ]
                }
            ]
        }
    ]
};



module.exports = nonMedicalVolunteerRegistration;