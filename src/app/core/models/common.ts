export class Info {

  count: number;
  next: string;
  pages: number;
  prev: any;

  constructor(count: number, next: string, pages: number, prev: any) {
    this.count = count;
    this.next = next;
    this.pages = pages;
    this.prev = prev;
  }
}
