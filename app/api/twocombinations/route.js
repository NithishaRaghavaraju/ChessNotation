import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
    "NOTATION": "Qxf7#",
    "HighlightSquares": ["f3", "f7"]
  },
  {
    "FEN": "rnbqk2r/ppp1npP1/3p3b/4p2p/4P3/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 1",
    "NOTATION": "gxh8=N",
    "HighlightSquares": ["g7", "h8"]
  },
  {
    "FEN": "r1bqkbn1/2pp1pp1/P6r/4p2p/1p2P2P/5R2/2PP1PP1/RNBQKBN1 b KQkq - 0 1",
    "NOTATION": "Rhxa6",
    "HighlightSquares": ["h6", "a6"],
    "Ambiguity" : true
  },
  {
    "FEN": "4kbnr/1QP2ppp/5r2/6q1/p3p1b1/8/PP1P1PPP/RNB1KBNR w KQkq - 0 1",
    "NOTATION": "c8=R+",
    "HighlightSquares": ["c7", "c8"]
  },
  {
    "FEN": "4kbnr/1QP2ppp/5r2/6q1/p3p3/2N2b2/PP1P1PPP/R1B1KBNR w KQkq - 0 1",
    "NOTATION": "c8=R#",
    "HighlightSquares": ["c7", "c8"]
  },
  {
    "FEN": "rnbqkb1r/ppp2ppp/3p3n/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
    "NOTATION": "Qxf7+",
    "HighlightSquares": ["f3", "f7"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
