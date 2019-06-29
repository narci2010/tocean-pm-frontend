/** 日志接口 */
export default interface Log {
  //
  debug(message?: any, ...optionalParams: any[]): void
  info(message?: any, ...optionalParams: any[]): void
  warn(message?: any, ...optionalParams: any[]): void
  error(message?: any, ...optionalParams: any[]): void
  fatal(message?: any, ...optionalParams: any[]): void
}
