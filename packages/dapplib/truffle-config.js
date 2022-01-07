require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy reflect rural unknown hunt deputy bone view'; 
let testAccounts = [
"0xb5c3a447ae968234a6581e00882ed99d6a728f3c810ee0c66e8325b0e43c68a4",
"0x3eae359d3daa996b7ac8c2d768826fb9a9bb621e4da7c3c7e1b1c4299016ab48",
"0x1b400071e07a97d76b300fd40ffb5dea82a3f9eca90d64cf2ded99a9b72b868b",
"0xd000e38ace090421c87464b723cf89f241674a01a652c53c5b17055420e4a7aa",
"0x3ad856333c2b56f0245cec797e2349b2629fdc73aa3d18f689a8568ec650793b",
"0x0ee7c71a06f87f2aa63311fb3b45836a6b955321d8f4f274afef63f06240a1d0",
"0x965d769da90978602e9778152de5e543ee6a267cb100a1b0cd03652e5ad67867",
"0xf1dccb2aeb2c13bac84221bbd002ceef292d2cd2719d31bbc890cf485cae208f",
"0x9bc742b79ce01194687d2d5351850b003c17a99c04e4f1822f5c82b74ee954da",
"0xd60ff9d4d5e885b6d93e6c1a509d4bb7ed9fa0a2a3c375aeadeef3cbc903164e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


