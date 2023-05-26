# Overview 
I took on the exciting Cloud Resume Challenge as a way to showcase my skills and explore various aspects of cloud computing. [The Cloud Resume Challenge](https://cloudresumechallenge.dev/) is a popular project developed by [Forrest Brazeal](https://bio.link/forrestbrazeal), aimed at highlighting the abilities required for a career in the cloud industry. For my attempt, I focused on utilizing Amazon Web Services (AWS) as my preferred cloud provider. I'd like to give a shoutout to the [AWS Discord](https://discord.com/servers/amazon-web-services-aws-cloud-423842546947457024) community for recommending this project and for providing a fantastic platform for cloud enthusiasts, whether beginners or experienced professionals, to connect and learn from one another. To view the finished project, you can view my website [here!](https://antoleska.net) 

![Website](https://img.shields.io/website?down_color=red&down_message=offline&label=antoleska.net&style=plastic&up_color=green&up_message=online&url=https%3A%2F%2Fantoleska.net)

This project aims to create a static website architecture with front-end and back-end components, utilizing various AWS services such as S3, CloudFront, Route 53, API Gateway, Lambda, and DynamoDB. The primary objectives are to host a static website on an S3 bucket, handle DNS, CDN, and SSL certificates using CloudFront and Route 53, and implement a visitor counter for the website using serverless solutions provided by AWS API Gateway, Lambda, and DynamoDB.

This repository contains all the files related to the front-end of the challenge. If you're interested in exploring the Terraform configuration, Lambda fuction, and GitHub actions then check out the [back-end repository.](https://github.com/oleskatony/crc-back-end)

## Process Flow

![resourcemapexample](https://github.com/oleskatony/cloudresumechallenge/blob/main/crcarchitecture.png)

1. When a visitor accesses the website, the JavaScript code embedded in the front-end triggers a request to the API Gateway.
2. The API Gateway receives the request and forwards it to the associated Lambda function.
3. The Lambda function is then invoked and retrieves the current visitor count from DynamoDB.
4. The Lambda function increments the visitor count, updates the count in DynamoDB, and generates a response.
5. The API Gateway receives the response from the Lambda function.
6. Finally, the API Gateway sends the response back to the front-end, completing the request-response cycle.

This process ensures that every time a visitor accesses the website, the visitor count is incremented and stored in DynamoDB, providing an accurate representation of the website's popularity.

## Front-End Components
The front-end of the website is a crucial component of the Cloud Resume Challenge project. It is responsible for providing the user interface and making API calls to update the visitor count. Here's an overview of the front-end implementation and the services used for deployment:

## S3
The front-end files, including HTML, CSS, and JavaScript, are hosted on an Amazon S3 (Simple Storage Service) bucket. S3 provides a scalable and highly available storage solution for static assets. It allows you to store and retrieve files easily, making it an ideal choice for hosting static websites.

## CloudFront
To deliver the front-end content with low latency and high performance, Amazon CloudFront is utilized as a content delivery network (CDN). CloudFront caches the static assets from the S3 bucket and distributes them to edge locations worldwide. This caching mechanism improves the website's speed and reduces the load on the S3 bucket.

## AWS Certificate Manager
To secure the website with HTTPS, an SSL certificate is obtained using AWS Certificate Manager (ACM). ACM provides an easy way to manage SSL/TLS certificates for your applications. The SSL certificate ensures that the communication between the website and its visitors is encrypted and secure.

## Route 53
Route 53 is used for DNS management and domain registration. It allows you to associate a domain name with your website hosted on S3 and CloudFront. Route 53 provides reliable and scalable DNS resolution, ensuring that visitors can access your website using a user-friendly domain name.

## API Gateway
An API Gateway is set up to receive requests from the front-end and forward them to the Lambda function. It acts as a bridge between the front-end and back-end components, handling the incoming requests and routing them to the appropriate back-end service.

## Continuous Integration and Continuous Deployment (CI/CD)
The front-end CI/CD process in this project leverages GitHub Actions and the AWS Command Line Interface (CLI). GitHub Actions automates the deployment workflow, allowing for efficient management of code changes. The CI/CD pipeline involves updating the S3 bucket with the modified front-end assets and invalidating the CloudFront cache using AWS CLI commands. This ensures that the users always receive the latest content and maintains a streamlined CI/CD process for the front-end.

# Conclusion
By successfully implementing this project, a static website architecture is created and hosted on an S3 bucket. The website benefits from DNS, CDN, and SSL certificate management provided by AWS CloudFront and Route 53. Additionally, the visitor counter functionality is seamlessly integrated using serverless solutions like AWS API Gateway, Lambda, and DynamoDB. Through Terraform, the deployment of serverless components is streamlined, while GitHub and AWS CLI enable efficient code management and automated deployment.