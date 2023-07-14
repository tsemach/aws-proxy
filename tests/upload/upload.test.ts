import fs from 'fs'
import request from 'supertest'
import { Server } from '../../src/application'
import Logger from '../../src/common/logger'
import { Initiator } from '../initiator/initiator'
const logger = Logger.get('upload-test')

describe('Test Upload API', function() {  
  this.beforeAll(async () => {
    await Initiator.instance.init()
  })

  it('upload.test.ts: test upload api', async () => {
    const file = fs.readFileSync('tests/upload/IMG_5020.JPG')
    
    const reply = await request(Server.instance.app)
      .put('/api/upload')
      .set('content-type', 'multipart/form-data')
      .send(file)
      .expect(200)
     
    logger.info('got reply:', reply.body)
  })
}) 