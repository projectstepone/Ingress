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
                            "type":"html",
                            "args": [`

                            <h2>Dear Warrior</h2>
                            Thanks for your interest in volunteer in this fight against Covid-19. Some of the top startup entrepreneurs and medical associations of India came together as a group to form Project StepOne, to help India manage and solve the COVID 19 pandemic. This is a form to enrol volunteers for the telemedicine project which is much needed now in the fight against the virus.
                            </br>

                            <h3>Why we need this technology platform?</h3>
                            As India enters stage 3 of the pandemic, it is expected that millions of people will start experiencing COVID19 like symptoms, tested covid positive, isolating at home - all of them would need healthcare access. The government systems and helplines are to handle the surge in call volumes - hence we are setting up a system which help these patients get access to doctors.
                            
                            <h3>What will this system do?</h3>
                            The helpline would use TECHNOLOGY to FILTER callers with COVID19 like symptoms and queue them as per their risk level and routed to doctors for helping them. The results of the triage will be given to the government authorities to follow-up as per the set protocols.
                            
                            <h3>What will I need to do?</h3>
                            We have various teams that own the multiple pieces that make StepOne volunteer network function that includes:
                            <ul>
                            <li>Telecalling</li>
                            <li>Product</li>
                            <li>Operations</li>
                            <li>Volunteer Success (HR) </li>
                            <li>Technology</li>
                            <li>Data Sciences/Engineering</li>
                            <li>Marketing</li>
                            <li>Network Development </li>
                            <li>Others</li>
                            </ul>

                            Indicate the broad function you have a preference in and based on our interaction we can get into the specifics of the function.
                            
                            <h3>Will I be given any training?</h3>
                            Yes, online training will be provided 
                            
                            <h3>When would I be contacted?</h3>
                            Once you submit the form, your details will be verified and once the verification is compete you'll be reached out. The process will take in the next 2–4 days but we are continuously working to make it faster. Please note if your details are not verifiable by us then you wont be contacted.
                            
                            <h3>How much time is required?</h3>
                            We would like a minimum commitment of 5 hours a week for atleast 2 months duration (specific roles will require more time commitment). This time provides you to leave behind a meaningful contribution to the system and also allows StepOne to channel your energy in a productive output for the effort.
                            
                            <h3>What if I cannot commit specific time slots but still want to contribute?</h3>
                            You can sign up as a tele-calling or tele-counselling volunteer - this provides the most flexibility for you to contribute according to your availability.
                            
                            <h3>What do I need to do to volunteer for the effort?</h3>
                            Please fill the form with the requisite details and we will contact you soon.

                            <h3>Will I be paid for this effort?</h3>
                            We are all volunteers for now and not expecting anyone to pay us -  our common goal and reward will be India free from Covid 19! 
                            `, `<p>But be rest assured that you will be immensely thanked for your efforts.</p>`
                        ]
                        },
                        {
                            "type":`divider`
                        },
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
                            "required": false
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