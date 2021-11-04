# lumatax-portal

Angular frontend for LumaTax take home assessment.

### Notable libraries / services used:
    * Angular
    * Bulma
    * Docker

---
**Disclaimer**  
*The parent Lumatax project will contain both the frontend and server: https://github.com/michaelmills/lumatax*  
*No need to clone this repo*  

## Build Spring Boot server
1. Run: npm run docker_build  
   This will build and create the docker image
2. You can either run Docker here or Docker-compose in https://github.com/michaelmills/lumatax/tree/main/docker
    * Docker run command:  
      docker run --publish 80:80 --env-file ./lumatax-portal/lumatax-portal.env mrmills/lumatax-portal:1.0.0
    * Docker compose command:  
      docker-compose up (or docker-compose up -d for detached mode)
