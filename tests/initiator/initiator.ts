import main from '../../src/main'

export class Initiator {
  public static _instance: Initiator;
  private isInit = false

  private constructor() {    
  }

  public static get instance() {
    return Initiator._instance || (Initiator._instance = new Initiator())
  }

  async init() {
    if ( ! this.isInit) {      
      main()
      this.isInit = true
    }
  }  
  
}
