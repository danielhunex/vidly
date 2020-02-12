export default class VidlyError extends Error {
  message: string;
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.message = message;
    this.status = status;
  }
}
