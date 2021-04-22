import { v4 as uuid } from "uuid";

export default class Entity {
  constructor() {
    this.id = uuid();
  }
}
