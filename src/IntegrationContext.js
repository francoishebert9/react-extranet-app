export default class  IntegrationContext {
  static get language() {
    return window.EEContext.language;
  }
  
  static get environment() {
    return window.EEContext.environment;
  }
  
  static get experience() {
    return window.EEContext.experience;
  }
}
