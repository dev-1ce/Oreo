const fs = require('fs').promises;
const path = require('path');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const origin = req.headers.origin;
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    const filePath = path.join(__dirname, `/data/${name}.json`);
        
        // Read the contents of the JSON file
    const fileContent = await fs.readFile(filePath, 'utf8');
        
        // Parse the JSON content
    const jsonData = (fileContent);

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        headers: {
            'Access-Control-Allow-Origin': '*', // Or specify specific origin(s)
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: jsonData
    };
}