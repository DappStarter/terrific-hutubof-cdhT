require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember attitude inner prison orange slow'; 
let testAccounts = [
"0xd3a5c4be2743b01a40dab10945c2fc0e2ce1aace8adaf85970ab53f3522f0990",
"0x2d8ed85444561953f0b583957e09ab0923f6305f95256f250d06337b7b76f802",
"0xe8ceb712852343dbf90f3750cf577406e7fce857d1eb5a29b1bab5de9fee3926",
"0x7319112d0530b9a60cd4871f4cea1ad1995bcf88a1f63c4fd39c36d91eefcb38",
"0xf8cb0dd2e97e2b132ad7d6dac00c7664ca7ad0faecaeef481a5ab6d0ec20ba31",
"0x9f51e7b5be4433ce14cf95a083160b9a08e6b4c89e4843cdb1499cb1c519172c",
"0x3f1b1c33efe9b0b8b288aebb385ceac6aca27d25d51f7a1ffd593d0a86b1229e",
"0x00e91d5fa47fe0adc79fd709379c81d54d69ea3fee96ab2cad8d1fc608f5af00",
"0x1750d83d9487a82b962ba6d76a0123b90d8f7b9be2f76fb1eac11c07c97dfb64",
"0x6475f2e04be79042665deb62f66bb24e6626693896ec90f39274b2b4f79e4322"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

