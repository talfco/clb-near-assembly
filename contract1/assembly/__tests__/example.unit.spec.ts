
//import { add } from "..";

import { showYouKnow } from "..";

import { storage, PersistentDeque, VMContext, VM } from "near-sdk-as";

const contract = "greeting";
const alice = "alice";
const bob = "bob";
const carol = "carol";
const message1 = "awesomesauce!";
const message2 = "yashilsin!";
const message3 = "beleza!";

let messages: PersistentDeque<string>;

describe("01. Greeting", () => {

  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
    messages = new PersistentDeque<string>("messages");
  });

  it("should respond to showYouKnow()", () => {
    showYouKnow();
    expect(showYouKnow).not.toThrow();
    expect(VM.logs()).toContainEqual("showYouKnow() was called");
  });

});
