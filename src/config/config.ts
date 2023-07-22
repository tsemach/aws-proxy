export class Config {
  private static _config: Config

  public static readonly listen = {
    port: +process.env.PORT ?? 3000
  }

  static get() {
    if ( ! Config._config ) {
      return (Config._config = new Config())
    }
  }
}
