import * as express from 'express';
import Logger from '../common/logger';
import { Server } from '../application';
import { Controller } from '../types/server/controller.type';
import { UploadRequest, UploadResponse } from '../types';
import { UploadService } from '../services/upload.service';
const logger = Logger.get('uplaod-route')

class UploadController implements Controller {

  constructor() {
    Server.instance.route('/api/', this);
  }

  public add(): express.Router {
    let router = express.Router();
                    
    router.put('/upload', async (req: UploadRequest, res: UploadResponse) => {
      logger.info('[/upload] route is called')
      await new UploadService().upload(req)

      res.send('{}')
    })

    return router;
  }

}

export default new UploadController();


