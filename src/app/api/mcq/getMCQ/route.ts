import Mcq from "../../../../models/mcqModels";
import { connect } from "../../../../db/dbConfig";
import { NextResponse } from "next/server";

// connecting to db
connect();

export const GET = async (): Promise<NextResponse> => {
  try {
    const mcqData = await Mcq.find();
    if (!mcqData) {
      return NextResponse.json(
        {
          error: "data not found",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json({ results: mcqData, success: true, status: true });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
