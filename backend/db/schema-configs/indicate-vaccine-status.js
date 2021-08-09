const indicateVaccineStatus = {
    "id": "indicate-vaccine-status",
    "item": [
        {
            "devNote": "Janssen requires only one dose; ",
            "Header": {},
            "Footer": {},
            "title": "Update Vaccincation Status",
            "description": "Update your vaccination status with Stepone",
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
                            "label": "Aadhar Number",
                            "id": "aadhar",
                            "description": null,
                            "type": "short_answer",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },
                        {
                            "label": "Current stage of Vaccination",
                            "id": "vaccineStage",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "Unvaccinated",
                                "Partially Vaccinated",
                                "Fully Vaccinated",
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": true
                        },

                        {
                            "label": "If received, Type of Vaccine received",
                            "id": "vaccineType",
                            "description": null,
                            "type": "dropdown",
                            "args": [
                                "CovidShield",
                                "Covaxin",
                                "Moderna",
                                "Pfizer",
                                "Sputnik",
                                "Johnson & Johnson",
                                "AstraZeneca",
                                "Novavax",
                                "Sinopharm"
                            ],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "If received, Date Of First Dose",
                            "id": "dateOfFirstDose",
                            "description": null,
                            "type": "date",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                        {
                            "label": "If received, Date Of Second Dose",
                            "id": "dateOfSecondDose",
                            "description": null,
                            "type": "date",
                            "args": [],
                            "validators": [],
                            "answerType": [],
                            "required": false
                        },
                    ]
                }
            ]
        }
    ]
};



module.exports = indicateVaccineStatus;