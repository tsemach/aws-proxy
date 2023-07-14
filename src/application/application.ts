import Logger from '../common/logger'
import { Server } from './server';
import { Config } from '../config'
const logger = Logger.get('application')   

export class Application {
  private static _instance: Application;
    
  private _isInit = false
  private _init_status = new Map<string, boolean>()

  private constructor() {     
  }

  public static get instance(): Application {
    return Application._instance || (Application._instance = new Application());    
  }
     
  start(port?: number) {
    port = (port && port > 0) ? port:  Config.listen.port
    logger.info('aws proxy going to listen on:' + port + '!');
    
    Server.instance.listen(port, `aws proxy going is listening on port: ${port} + '!'`)
  }  

  async init() {
    if (this._isInit) {
      return 
    }
   
    this._isInit = true
  }

}
