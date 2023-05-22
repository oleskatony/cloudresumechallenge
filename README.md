# Overview
This project aims to create a static website architecture with frontend and backend components, utilizing various AWS services such as S3, CloudFront, Route 53, API Gateway, Lambda, and DynamoDB. The primary objectives are to host a static website on an S3 bucket, handle DNS, CDN, and SSL certificates using CloudFront and Route 53, and implement a visitor counter for the website using serverless solutions provided by AWS API Gateway, Lambda, and DynamoDB.

## Components

- Frontend: The website's frontend is hosted on an S3 bucket and includes HTML, CSS, and JavaScript files. The JavaScript code is responsible for making API calls to update the visitor count.

- API Gateway: An API Gateway is set up to receive requests from the frontend and forward them to the Lambda function. It acts as a bridge between the frontend and backend components, handling the incoming requests and routing them to the appropriate backend service.

- Lambda Function: The Lambda function plays a crucial role in this project. It is responsible for updating the visitor count stored in DynamoDB and returning a response to the API Gateway. The Lambda function is written in Python and executed in a serverless environment. It retrieves the current visitor count from DynamoDB, increments it, updates the count in DynamoDB, and sends a response back to the API Gateway.

- DynamoDB: DynamoDB serves as the database for storing the visitor count. It provides a scalable, NoSQL data storage solution. The visitor count is stored in a DynamoDB table, and the Lambda function interacts with this table to read and update the count.

- Infrastructure as Code (IaC): To streamline the creation of serverless components, this project utilizes Terraform, an Infrastructure as Code (IaC) tool. Terraform allows for the declarative definition and provisioning of infrastructure resources, enabling efficient and consistent deployment of the API gateway, Lambda function, and DynamoDB.

- Continuous Integration and Continuous Deployment (CI/CD): For managing changes to the codebase and automating deployments, this project integrates GitHub and the AWS Command Line Interface (CLI). GitHub serves as the version control system, facilitating collaboration and code management. The AWS CLI is used to deploy the changes made in the codebase to the AWS infrastructure, ensuring a streamlined CI/CD process.

## Process Flow

1. When a visitor accesses the website, the JavaScript code embedded in the frontend triggers a request to the API Gateway.
2. The API Gateway receives the request and forwards it to the associated Lambda function.
3. The Lambda function is then invoked and retrieves the current visitor count from DynamoDB.
4. The Lambda function increments the visitor count, updates the count in DynamoDB, and generates a response.
5. The API Gateway receives the response from the Lambda function.
6. Finally, the API Gateway sends the response back to the frontend, completing the request-response cycle.

This process ensures that every time a visitor accesses the website, the visitor count is incremented and stored in DynamoDB, providing an accurate representation of the website's popularity.

# Conclusion

By successfully implementing this project, a static website architecture is created and hosted on an S3 bucket. The website benefits from DNS, CDN, and SSL certificate management provided by AWS CloudFront and Route 53. Additionally, the visitor counter functionality is seamlessly integrated using serverless solutions like AWS API Gateway, Lambda, and DynamoDB. Through Terraform, the deployment of serverless components is streamlined, while GitHub and AWS CLI enable efficient code management and automated deployment.
