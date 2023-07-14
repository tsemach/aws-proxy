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

  it('health.test.ts: test health message', async () => {        
    const reply = await request(Server.instance.app)
      .get('/health')      
      .expect(200)
     
    logger.info('got reply:', reply.body)
  })
}) 