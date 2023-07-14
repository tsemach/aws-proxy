export class AWSBucket {  
  private just_content: boolean

  constructor(private _bucket: string, private _key?: string, just_content = true) {    
    this.just_content = just_content
  }  

  get bucket() {
    return this._bucket
  }

  get key() {
    return this._key
  }

  set key(_key) {
    this._key = _key
  }

  getS3Path() {
    return `s3://${this.bucket}/${this.key}`
  }

  suffix(_suffix: string) {
    if (!_suffix) {
      return this.content(this.key)
    }

    if (!this.key) {
      return this.content(_suffix)
    }

    return `${this.key}/${this.content(_suffix)}`
  }

  content(_content) {
    if ( ! this.just_content ) {
      return _content
    }    
    
    return _content.split('/').splice(1).join('/')    
  }
}
