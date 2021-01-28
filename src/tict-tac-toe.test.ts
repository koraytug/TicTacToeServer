import { TicTacToe } from "./tic-tac-toe";
import { IWinner } from "./models/iwinner";
import { expect } from "chai";

describe("ticTacToe getWinner", () => {

    it("returns empty winner if input parameter is empty", () => {
        const expectedResult: IWinner = {
            winner:null
        };
        
        const result = TicTacToe.getWinner("");

        expect(result).to.deep.equal(expectedResult);
    });
     
    it("returns valid winner if input parameter is valid", () => {
        const expectedResult: IWinner = {
            winner:"x"
        };
        
        const params = '{"board": [["x","x","x"],["o","o", ""],["","",""]]}';
        
        const result = TicTacToe.getWinner(params);

        expect(result).to.deep.equal(expectedResult);
    });
});