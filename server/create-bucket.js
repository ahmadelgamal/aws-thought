// load the AWS SDK for Node.js
const AWS = require("aws-sdk");

// create unique S3 bucket name
const { v4: uuid4 } = require("uuid");

// set the region
AWS.config.update({ region: "us-east-2" });

// create S3 service object instance with the designated API
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// create the parameters for calling createBucket
var bucketParams = {
  Bucket: "user-images-" + uuid4(),
};

// call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success");
  }
});
