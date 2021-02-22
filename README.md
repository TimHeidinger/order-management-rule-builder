# AOE OMS - Rule Builder

The AOE Rule Builder offers customers the possibility to create and edit so-called automation JSON rule sets. The generated automation rules can be further processed by the AOE Order Management System.

## Build (Automatic deployment to AWS)

### Angular service

Make sure that your aws enviroment settings `aws-deploy` in `package.json` is correct.

The deployment process of the frontend components to AWS S3 can be started by typing `ng build && npm run aws-deploy`.

### PHP service

The PHP backend files in `/php-backend` need to be manually deployed to your PHP server.

Afterwards make sure that the URL of your PHP server is correctly set in `/app/services/database.service.ts`. 
