import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "r5k1/6pp/P7/6N1/8/r1N4P/6PK/6R1 w KQkq - 0 1",
    "NOTATION": "Nce4",
    "HighlightSquares": ["c3", "e4"],
    "Ambiguity" : true
  },
  {
    "FEN": "r5k1/6pp/P7/6N1/8/r1N4P/6PK/6R1 w KQkq - 0 1",
    "NOTATION": "Nge4",
    "HighlightSquares": ["g5", "e4"],
    "Ambiguity" : true
  },
  {
    "FEN": "r5k1/6pp/8/6N1/4N3/r6P/6PK/6R1 b KQkq - 0 1",
    "NOTATION": "R3a6",
    "HighlightSquares": ["a3", "a6"],
    "Ambiguity" : true
  },
  {
    "FEN": "r5k1/6pp/8/6N1/4N3/r6P/6PK/6R1 b KQkq - 0 1",
    "NOTATION": "R8a6",
    "HighlightSquares": ["a8", "a6"],
    "Ambiguity" : true
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
