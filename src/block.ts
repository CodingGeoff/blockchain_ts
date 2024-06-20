import * as crypto from 'crypto';

// type BlockStruct = {
//   prevHash: Buffer;
//   hash: Buffer | null;
//   data: Buffer;
// };

class Block {
  prevHash: Buffer;
  hash: Buffer | null;
  data: Buffer;

  constructor(data: string, prevHash: Buffer) {
    this.data = Buffer.from(data);
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
  }

  calculateHash(): Buffer {
    const hash = crypto.createHash('sha256');
    // const blockByteInfo = Buffer.concat([this.prevHash, this.data])
    hash.update(this.prevHash);
    hash.update(this.data);
    return hash.digest();
  }
}

export { Block };
