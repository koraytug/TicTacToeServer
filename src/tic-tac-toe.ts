import { IBoard } from "./models/iboard";
import { IRow } from "./models/irow";
import { IWinner } from "./models/iwinner";

export class TicTacToe{
    public static getWinner(params: string): IWinner {
        let result: IWinner = {
        winner:null
    };

    if (!params || params === "") {
        return result; 
    }

    try {
        const payload: IBoard = JSON.parse(params);
        const rowsWiner: string | null = this.checkRows(payload.board);
        if (rowsWiner !== null) {
            return {
                winner: rowsWiner
            }
        }

        const linesWiner: string | null = this.checkLines(payload.board);
        if(linesWiner !== null) {
            return {
                winner:linesWiner
            }
        }
    
        const crossWiseWinner: string|null = this.checkCrossWise(payload.board);
    
        if (crossWiseWinner !== null) {
            return {
                winner:crossWiseWinner
            }
        }
        
        return result; 
    } catch (error) {
        return result; 
    }

}
    public static checkRows(board: IRow): string|null {
        if (board[0][0] === board[0][1] && board[0][0]=== board[0][2] && board[0][0] != "")
            return board[0][0];
        else if (board[1][0] === board[1][1] &&board[1][0] === board[1][2] && board[1][0] != "")
            return board[1][0];
        else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] != "")
            return board[2][0];
        else
            return null;
    }

    public static checkLines(board: IRow): string|null {
        if (board[0][0] === board[1][0] && board[0][0]=== board[2][0] && board[0][0] != "")
            return board[0][0];
        else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] != "")
            return board[1][0];
        else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] != "")
            return board[0][2];
        else
            return null;
    }

    public static checkCrossWise(board: IRow): string|null {
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] != "")
            return board[0][0];
        else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] != "")
            return board[0][2];
        else
            return null;
    }
}
