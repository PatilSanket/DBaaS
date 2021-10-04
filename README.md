# DBaaS

Creates an interface to work directly with database straight from the browser. 
For reads, just hit the appropriate endpoint with path params.
for writes, a REST Client is needed (e.g. Postman, Thunder client etc).
Hosted on AWS Lambda function.


Steps to run the project on AWS Lambda:
1. Clone the repo.
2. Run it locally.
3. Zip the entire file, along with the dependencies.
4. a. With web console: Go to lambda section. Import the zipped file. You can see the code in web IDE. 
   b. Using Terraform: Use archive_file data source. Put the absolute path of the repo (the original one, not the zipped one). And use that data source into your lambda function.
      (https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/archive_file).
      
5. Provision API Gateway as the trigger and create endpoints mentioned in the code.
