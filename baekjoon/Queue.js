/* 
https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-.%ED%81%90-Queue
 */

class Queue {
  constructor() {
    this.storage = {}
    this.front = 0
    this.rear = 0
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0
    } else {
      return this.rear - this.rear + 1
    }
  }

  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value
    } else {
      this.rear += 1
      this.storage[this.rear] = value
    }
  }

  popleft() {
    let temp
    if (this.front === this.rear) {
      temp = this.storage[this.front]
      delete this.storage[this.front]
      this.front = 0
      this.rear = 0
    } else {
      temp = this.storage[this.front]
      delete this.storage[this.front]
      this.front += 1
    }
    return temp
  }
}
