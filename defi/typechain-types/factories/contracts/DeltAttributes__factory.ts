/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeltAttributes,
  DeltAttributesInterface,
} from "../../contracts/DeltAttributes";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "awarded",
            type: "bool",
          },
          {
            internalType: "string",
            name: "itemName",
            type: "string",
          },
          {
            internalType: "string",
            name: "itemType",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "mod",
            type: "uint256",
          },
        ],
        internalType: "struct DeltAttributes.ItemId",
        name: "_itemItem",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "encodedSVG",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "attrKey",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "desc",
                type: "string",
              },
              {
                internalType: "string",
                name: "statKey",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "tier",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct DeltAttributes.Stat[]",
            name: "stats",
            type: "tuple[]",
          },
        ],
        internalType: "struct DeltAttributes.Attr[]",
        name: "_attributes",
        type: "tuple[]",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61111261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80632dfa18b51461003a575b600080fd5b61004d610048366004610a40565b610063565b60405161005a9190610e0e565b60405180910390f35b60606100b98460200151856040015161007f87606001516100e1565b61008887610209565b610091876103bd565b6040516020016100a5959493929190610cc8565b604051602081830303815290604052610642565b6040516020016100c99190610dc9565b60405160208183030381529060405290509392505050565b6060816101055750506040805180820190915260018152600360fc1b602082015290565b8160005b811561012f578061011981610f95565b91506101289050600a83610f1b565b9150610109565b6000816001600160401b0381111561014957610149611006565b6040519080825280601f01601f191660200182016040528015610173576020820181803683370190505b509050815b851561020057610189600182610f4e565b90506000610198600a88610f1b565b6101a390600a610f2f565b6101ad9088610f4e565b6101b8906030610ef6565b905060008160f81b9050808484815181106101d5576101d5610ff0565b60200101906001600160f81b031916908160001a9053506101f7600a89610f1b565b97505050610178565b50949350505050565b8051606090829061022a575050604080516000815260208101909152919050565b600481516102389190610fb0565b156102895760405162461bcd60e51b815260206004820152601c60248201527f696e76616c696420626173653634206465636f64657220696e70757400000000604482015260640160405180910390fd5b60006040518060a001604052806080815260200161105d6080913990506000600483516102b69190610f1b565b6102c1906003610f2f565b905060006102d0826020610ede565b6001600160401b038111156102e7576102e7611006565b6040519080825280601f01601f191660200182016040528015610311576020820181803683370190505b5090508351840151603d60ff8216141561034057600183039250613d3d61ffff82161415610340576001830392505b50818152600183018485518101602084015b818310156103af57600483019250825160ff8082168601511660ff808360081c168701511660061b0160ff808360101c1687015116600c1b60ff808460181c168801511660121b010190508060e81b825250600381019050610352565b509298975050505050505050565b60408051602081019091526000808252606091905b835181101561063b57818482815181106103ee576103ee610ff0565b60200260200101516000015160405160200161040b929190610c2f565b604051602081830303815290604052915060005b84828151811061043157610431610ff0565b602002602001015160200151518110156105ce578285838151811061045857610458610ff0565b602002602001015160200151828151811061047557610475610ff0565b60200260200101516020015186848151811061049357610493610ff0565b60200260200101516020015183815181106104b0576104b0610ff0565b6020026020010151600001516104ff8886815181106104d1576104d1610ff0565b60200260200101516020015185815181106104ee576104ee610ff0565b6020026020010151604001516100e1565b61054289878151811061051457610514610ff0565b602002602001015160200151868151811061053157610531610ff0565b6020026020010151606001516100e1565b604051602001610556959493929190610b59565b6040516020818303038152906040529250600185838151811061057b5761057b610ff0565b602002602001015160200151516105929190610f4e565b8110156105bc57826040516020016105aa9190610ca2565b60405160208183030381529060405292505b806105c681610f95565b91505061041f565b50816040516020016105e09190610c7d565b6040516020818303038152906040529150600184516105ff9190610f4e565b81101561062957816040516020016106179190610ca2565b60405160208183030381529060405291505b8061063381610f95565b9150506103d2565b5092915050565b606081516000141561066257505060408051602081019091526000815290565b600060405180606001604052806040815260200161101d60409139905060006003845160026106919190610ede565b61069b9190610f1b565b6106a6906004610f2f565b905060006106b5826020610ede565b6001600160401b038111156106cc576106cc611006565b6040519080825280601f01601f1916602001820160405280156106f6576020820181803683370190505b509050818152600183018586518101602084015b81831015610762576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f811685015182535060010161070a565b60038951066001811461077c576002811461078d57610799565b613d3d60f01b600119830152610799565b603d60f81b6000198301525b509398975050505050505050565b600082601f8301126107b857600080fd5b6107ca6107c58335610ebb565b610e8b565b808335825260208201915060208401856020863560051b87010111156107ef57600080fd5b60005b85358110156109c6576001600160401b038235111561081057600080fd5b6040823587018803601f1901121561082757600080fd5b61082f610e41565b6001600160401b036020843589010135111561084a57600080fd5b61085f88602085358a018181013501016109d1565b81526001600160401b036040843589010135111561087c57600080fd5b82358701604081013501603f8101891361089557600080fd5b6108a56107c56020830135610ebb565b602082810135808352908201919060408085019160051b8501018c10156108cb57600080fd5b60005b60208501358110156109a5576001600160401b03823511156108ef57600080fd5b6080823586018e03603f1901121561090657600080fd5b61090e610e69565b6001600160401b036040843588010135111561092957600080fd5b61093e8e6040853589018181013501016109d1565b81526001600160401b036060843588010135111561095b57600080fd5b6109718e843588016060810135016040016109d1565b602082810191909152833587016080810135604084015260a0013560608301529085529384019391909101906001016108ce565b505060208481019190915292875250509384019391909101906001016107f2565b509095945050505050565b600082601f8301126109e257600080fd5b81356001600160401b038111156109fb576109fb611006565b610a0e601f8201601f1916602001610e8b565b818152846020838601011115610a2357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610a5557600080fd5b83356001600160401b0380821115610a6c57600080fd5b9085019060808288031215610a8057600080fd5b610a88610e69565b82358015158114610a9857600080fd5b8152602083013582811115610aac57600080fd5b610ab8898286016109d1565b602083015250604083013582811115610ad057600080fd5b610adc898286016109d1565b60408301525060608301356060820152809550506020860135915080821115610b0457600080fd5b610b10878388016109d1565b93506040860135915080821115610b2657600080fd5b50610b33868287016107a7565b9150509250925092565b60008151610b4f818560208601610f65565b9290920192915050565b60008651610b6b818460208b01610f65565b601160f91b9083019081528651610b89816001840160208b01610f65565b6d111d10103d913232b9b1911d101160911b600192909101918201528551610bb881600f840160208a01610f65565b6b011161010113a34b2b9111d160a51b600f92909101918201528451610be581601b840160208901610f65565b6b0161010113b30b63ab2911d160a51b601b92909101918201528351610c12816027840160208801610f65565b607d60f81b60279290910191820152602801979650505050505050565b60008351610c41818460208801610f65565b601160f91b9083019081528351610c5f816001840160208801610f65565b64223a20207b60d81b60019290910191820152600601949350505050565b60008251610c8f818460208701610f65565b607d60f81b920191825250600101919050565b60008251610cb4818460208701610f65565b61016160f51b920191825250600201919050565b693d913730b6b2911d101160b11b81528551600090610cee81600a850160208b01610f65565b6c11161010113a3cb832911d101160991b600a918401918201528651610d1b816017840160208b01610f65565b6a0111610101136b7b2111d160ad1b601792909101918201528551610d47816022840160208a01610f65565b6c1610101134b6b0b3b2911d101160991b602292909101918201528451610d7581602f840160208901610f65565b630111610160e51b602f92909101918201526e2261747472696275746573223a207b60881b6033820152610dbd610daf6042830186610b3d565b617d7d60f01b815260020190565b98975050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251610e0181601d850160208701610f65565b91909101601d0192915050565b6020815260008251806020840152610e2d816040850160208701610f65565b601f01601f19169190910160400192915050565b604080519081016001600160401b0381118282101715610e6357610e63611006565b60405290565b604051608081016001600160401b0381118282101715610e6357610e63611006565b604051601f8201601f191681016001600160401b0381118282101715610eb357610eb3611006565b604052919050565b60006001600160401b03821115610ed457610ed4611006565b5060051b60200190565b60008219821115610ef157610ef1610fc4565b500190565b600060ff821660ff84168060ff03821115610f1357610f13610fc4565b019392505050565b600082610f2a57610f2a610fda565b500490565b6000816000190483118215151615610f4957610f49610fc4565b500290565b600082821015610f6057610f60610fc4565b500390565b60005b83811015610f80578181015183820152602001610f68565b83811115610f8f576000848401525b50505050565b6000600019821415610fa957610fa9610fc4565b5060010190565b600082610fbf57610fbf610fda565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e0000003f3435363738393a3b3c3d00000000000000000102030405060708090a0b0c0d0e0f101112131415161718190000000000001a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132330000000000a26469706673582212207da5279fa19ead6bf116b5190a47c8064c03ba073cabadeaa514a5e54d2c4a3464736f6c63430008070033";

type DeltAttributesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeltAttributesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeltAttributes__factory extends ContractFactory {
  constructor(...args: DeltAttributesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DeltAttributes> {
    return super.deploy(overrides || {}) as Promise<DeltAttributes>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeltAttributes {
    return super.attach(address) as DeltAttributes;
  }
  override connect(signer: Signer): DeltAttributes__factory {
    return super.connect(signer) as DeltAttributes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeltAttributesInterface {
    return new utils.Interface(_abi) as DeltAttributesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeltAttributes {
    return new Contract(address, _abi, signerOrProvider) as DeltAttributes;
  }
}