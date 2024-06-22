import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
    "NOTATION": "O-O",
    "HighlightSquares": ["e1", "g1"]
  },
  {
    "FEN": "r3kbnr/ppp2ppp/2np1q2/4p3/2B1P1b1/3P1N1P/PPP2PP1/RNBQ1RK1 b KQkq - 0 1",
    "NOTATION": "O-O-O",
    "HighlightSquares": ["e8", "c8"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
