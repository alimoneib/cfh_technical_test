# CFH Backend Technical Test

This is my submission for the backend technical test for the Sr. Backend Engineer position at Cairo Financial Holding, CFH

## Getting Started

Prerequisites:

Node.js and npm installed on your system.
Installation:

Clone this repository:
```
git clone https://github.com/alimoneib/cfh_technical_test.git
```


Install dependencies:
```
npm install
```
## Development

Start the development server:
```
npm run dev
````
This will start your application in development mode, allowing for hot reloading or other development features.

## Environment Variables

This project relies on several environment variables for configuration. You'll need to create these variables and set the appropriate values before running the application.
```bash
export PORT=8000
export DB_CONNECTION_STRING="mongodb+srv://alimoneib:PVDiax3H4UqJCoVa@personalcluster.4dszu8z.mongodb.net/?retryWrites=true&w=majority&appName=PersonalCluster"
export DB_NAME="cfh_test_db"
export JWT_SECRET="ThisIsA veryStrongAndSecretJWTKey!@#$%^&*"
```
## API Documentation

The API documentation for this project is located in the `/api` subdirectory. This markdown file (.md) describes the available endpoints, request parameters, response structures, and other relevant details for interacting with the API.

