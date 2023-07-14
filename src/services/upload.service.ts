import * as AWS from '../aws/aws'
import stream, { PassThrough } from 'stream'
import Logger from '../common/logger'
const logger = Logger.get('upload-service')

export class UploadService {
  constructor() {}

  async upload(rs: stream.Stream) {    
    const S3 = AWS.getS3();    

    try {
      const ws = rs.pipe(new PassThrough())
      const reply = await S3.upload({ Bucket: 'iot-upload', Key: 'IMG_5020.JPG', Body: ws }).promise()

      logger.info('upload reply:', reply)
    }
    catch (e) {
      logger.error('error on upload, e:', e)
    }    
  }
  
}