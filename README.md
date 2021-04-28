# Ingress
StepOne's Project Ingress </br>
A configuration based Form Builder


## Dependencies

- Docker and docker compose are pre requisites for the setup.

## Setup

- Run `git clone https://github.com/projectstepone/Ingress` and `cd Ingress`
- Run `docker-compose up --build` to generate the image and run the container
- Navigate to [localhost:3001](http://localhost:3001) for accessing via php my admin
- Use the same credentials to login as specified in the docker-compose.yml file


## Support

### UI 
- Currently, the following UI types for answers in the form are supported:
  - short_answer
  - paragraph
  - radio
  - multiple_choice
  - dropdown
  
- We are looking to further support the following datatypes in the future:
  - Date
  - Time
  
### Validation
- Currently, the only type of validation that is supported on the client side is `required`.
- We are looking to support the following types of validations in the future:
  - String
  - Number
  - Possibly some from [Validatorjs](https://www.npmjs.com/package/validatorjs)
  
  
## Notes

- When adding the schema to the DB via PHP my Admin GUI, ensure that the schema schema column in the formConfiguration table is escaped.
- Currently the supported workflow is to add the form submission to a kafka queue. The configuration for the kafka queue needs to be specified in the docker-compose.yml file. 
- There exists a sample schema for the form at sample2.json. It is present at `client/src/config/sample2.json`
- The default route (/) on the frontend leads to Project Stepone's website. The only routes supported on the frontend are of the format /form/UUID.
- Each form is identified by a UUID and each user is identified by their email.


## FAQ
<details>
  <summary>What is the structure of the database ?</summary>
  
  ## Tables
  
  1. users
  
  - email 
  - password
  - isActive
  - isAdmin

  2. formConfiguration
  
  - formConfigId
  - schema
  - created_by
  
  The initialization script for the application can be found under `backend/db/scripts` They are to be run in ascending order of their prefixed number.
  
</details>

<details>
    <summary>What is the scope of this project ?</summary>
  Ingress aims to be a schema based Form and webhook creator.
  One should be able to create customizable forms and APIs; all by specifying a configuration.
  The entire scope of the workflows to be supported post submission of forms are yet to be decided. 
  Immediate requirements are to support addition to Kafka queue to support statesman. 
</details>




<details>
    <summary>Which endpoints are available?</summary>
    
   ### Backend
  
   - /config/id
   
      Where id is the UUID for the form
      If the form does not exist, the backend returns an empty array
   
   ### Frontend
  
   - /form/id
   
      Where id is the UUID for the form
    
   A URL bearing UUID for which a corresponding form does not exist and all unspecified URLs lead to a 404 Page.  
  
 
</details>
