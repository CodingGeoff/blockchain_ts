import { Block } from "./block";

const genesisInfo =
  "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks";

class BlockChain {
  public blocks: Block[];

  constructor() {
    this.blocks = [];
  }

  addBlock(data: string) {
    const prevBlock = this.blocks[this.blocks.length - 1];
    const newBlock = new Block(data, prevBlock.hash as Buffer);
    this.blocks.push(newBlock);
  }

  printChain() {
    this.blocks.forEach((block, index) => {
      console.log(`======== block height : ${index} =======`);
      console.log(`PrevHash : ${block.prevHash.toString("hex")}`);
      console.log(`Hash : ${block.hash?.toString("hex")}`);
      console.log(`Data : ${block.data.toString()}`);
    });
  }
}

function newBlockChain(): BlockChain {
  const genesisBlock = new Block(genesisInfo, Buffer.from([0x00]));
  const blockchain = new BlockChain();
  blockchain.blocks.push(genesisBlock);
  return blockchain;
}

export {
  newBlockChain,
  BlockChain
}
