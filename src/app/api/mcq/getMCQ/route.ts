import Mcq from "../../../../models/mcqModels";
import { connect } from "../../../../db/dbConfig";
import { NextResponse } from "next/server";

// Connecting to the database
connect();

export const GET = async (request: Request): Promise<NextResponse> => {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    // Extract and validate query parameters
    const page = parseInt(searchParams.get("page") || "0", 10);

    if (page < 0) {
      return NextResponse.json(
        { error: "Page number cannot be negative.", success: false },
        { status: 400 }
      );
    }

    console.log("Fetching MCQ...");

    const limit = 1; // We want only one data per page
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

    // Return the single MCQ data for the requested page
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
