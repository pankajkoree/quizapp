import Mcq from "../../../../models/mcqModels";
import { connect } from "../../../../db/dbConfig";
import { NextResponse } from "next/server";

// Connecting to the database
connect();

export const GET = async (request: Request): Promise<NextResponse> => {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    const page = parseInt(searchParams.get("page") || "0");

    if (page < 0) {
      return NextResponse.json(
        { error: "Page number cannot be negative.", success: false },
        { status: 400 }
      );
    }

    const limit = 1;
    const skip = page * limit;

    // Fetch one MCQ with pagination
    const mcqData = await Mcq.find().skip(skip).limit(limit);
    const totalProducts = await Mcq.countDocuments();

    if (!mcqData || mcqData.length === 0) {
      return NextResponse.json(
        { error: "Data not found.", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      results: mcqData,
      total: totalProducts,
      page,
      limit,
      success: true,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message, success: false },
      { status: 500 }
    );
  }
};
