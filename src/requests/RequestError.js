export default class RequestError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}