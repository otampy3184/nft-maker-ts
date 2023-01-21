import { expect } from "chai";
import hre from "hardhat";

describe('NFTMaker', function () {
    let NFTMakerContractFactory, NFTMakerContract: any, owner: any, addrs: any[]
    beforeEach(async function () {
        NFTMakerContractFactory = await hre.ethers.getContractFactory("NFTMaker")
        ;[owner, ...addrs] = await hre.ethers.getSigners()
        NFTMakerContract = await NFTMakerContractFactory.deploy()
    });

    it('should mint a new NFT', async () => {
        const name = 'My NFT';
        const imageURI = 'ipfs://abc123';
        const description = 'This is my NFT';

        await NFTMakerContract.mintNFT(name, imageURI, description);

        const tokenURI = await NFTMakerContract.tokenURI(0);
        const expectedURI = `data:application/json;base64,eyJuYW1lIjogIk15IE5GVCAtLSBORlQgIzogMCIsICJkZXNjcmlwdGlvbiI6ICJUaGlzIGlzIG15IE5GVCIsICJpbWFnZSI6ICJpcGZzOi8vaXBmczovL2FiYzEyMyJ9`
        expect(tokenURI).to.equal(expectedURI);
    });
});