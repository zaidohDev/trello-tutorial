import { NextResponse } from "next/server";
import React from "react";

export function GET() {
  return NextResponse.json({
    hello: "🗺",
  });
}

export function POST() {
  return NextResponse.json({
    hello: "🗺",
  });
}

export function PATCH() {
  return NextResponse.json({
    hello: "🗺",
  });
}

export function DELETE() {
  return NextResponse.json({
    hello: "🗺",
  });
}
