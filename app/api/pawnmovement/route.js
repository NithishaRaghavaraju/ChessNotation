import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    "NOTATION": "e4",
    "HighlightSquares": ["e2", "e4"]
  },
  {
    "FEN": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
    "NOTATION": "e5",
    "HighlightSquares": ["e7", "e5"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/8/4pn2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
    "NOTATION": "d3",
    "HighlightSquares": ["d2", "d3"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/8/4pn2/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 1",
    "NOTATION": "d6",
    "HighlightSquares": ["d7", "d6"]
  },
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
