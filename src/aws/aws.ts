import proxy from 'proxy-agent'
import AWS from 'aws-sdk'
import Logger from '../common/logger'
const logger = Logger.get('aws')

const { HTTP_PROXY, NODE_ENV, USE_MINIO_OBJECT_STORE } = process.env
logger.info('AWS: USE_MINIO_OBJECT_STORE =', USE_MINIO_OBJECT_STORE, typeof USE_MINIO_OBJECT_STORE)

if (NODE_ENV === 'local' && ! USE_MINIO_OBJECT_STORE) {
  AWS.config.update({      
    region: process.env.AWS_REGION,
    // httpOptions: { ...(HTTP_PROXY && { agent: proxy(HTTP_PROXY) }) }
    httpOptions: {}
  });
}

function getS3() {
  const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_S3_ENDPOINT } = process.env    
  let config = {  
    ...(AWS_ACCESS_KEY && {accessKeyId: AWS_ACCESS_KEY}) ,
    ...(AWS_SECRET_KEY && {secretAccessKey: AWS_SECRET_KEY}),
    ...(AWS_S3_ENDPOINT && {endpoint: AWS_S3_ENDPOINT}),  
    s3ForcePathStyle: true,
    signatureVersion: 'v4'    
  }

  return new AWS.S3(config)
}

export {  
  getS3
}


