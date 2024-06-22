import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "rnb1k2r/ppppbpP1/8/4N2p/1P2P1n1/8/PP1P2PP/RNBQKB1R w KQkq - 0 1",
    "NOTATION": "gxh8=R+",
    "HighlightSquares": ["g7", "h8"]
  },
  {
    "FEN": "r1bqk2r/pp1pppPp/n7/2p5/4P1n1/3P4/PPP3P1/RNBQKBNR w KQkq c6 0 1",
    "NOTATION": "gxh8=R#",
    "HighlightSquares": ["g7", "h8"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
