import * as express from 'express';
import Logger from '../common/logger';
import { Server } from '../application';
import { Controller } from '../types/server/controller.type';
import { AWSProxyRequest, AWSProxyResponse } from '../types';
import { UploadService } from '../services/upload.service';
const logger = Logger.get('uplaod-route')

class UploadController implements Controller {

  constructor() {    
    Server.instance.route('/', this);
  }

  public add(): express.Router {
    let router = express.Router();
                    
    router.get('/health', async (req: AWSProxyRequest, res: AWSProxyResponse) => {      
      res.json({ status: 'ok' })
    })

    return router;
  }

}

export default new UploadController();


