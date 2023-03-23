export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get date() {
    return new Date(this.futureDate);
  }

  get diff() {
    const today = new Date();
    return this.date.getTime() - today.getTime();
  }

  get days() {
    return Math.floor(this.diff / (24 * 60 * 60 * 1000));
  }

  get hours() {
    return Math.floor(this.diff / (60 * 60 * 1000));
  }

  get minutes() {
    return Math.floor(this.diff / (60 * 1000));
  }

  get seconds() {
    return Math.floor(this.diff / 1000);
  }

  get countdown() {
    return {
      days: this.days,
      hours: this.hours % 24,
      minutes: this.minutes % 60,
      seconds: this.seconds % 60,
      complete: `${this.days} ${this.hours % 24}:${this.minutes % 60}:${this.seconds % 60}`,
    };
  }
}
