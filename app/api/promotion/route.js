import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "r1bqkb1r/1ppp1pPp/p6n/4p3/1n2P3/8/PPPP2PP/RNBQKBNR w KQkq - 0 1",
    "NOTATION": "g8=Q",
    "HighlightSquares": ["g7", "g8"]
  },
  {
    "FEN": "r1bqkb1r/1ppp1pPp/p6n/4p3/1n2P3/8/PPPP2PP/RNBQKBNR w KQkq - 0 1",
    "NOTATION": "g8=B",
    "HighlightSquares": ["g7", "g8"]
  },
  {
    "FEN": "rnbqk1nr/p5pp/3b1p2/P3p3/1pB1P2N/1R1PBQ2/1Pp2PPP/5RK1 b KQkq - 0 1",
    "NOTATION": "c1=R",
    "HighlightSquares": ["c2", "c1"]
  },
  {
    "FEN": "rnbqk1nr/p5pp/3b1p2/P3p3/1pB1P2N/1R1PBQ2/1Pp2PPP/5RK1 b KQkq - 0 1",
    "NOTATION": "c1=N",
    "HighlightSquares": ["c2", "c1"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
