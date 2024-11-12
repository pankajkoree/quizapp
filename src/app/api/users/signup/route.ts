import { NextResponse } from "next/server";
import { connect } from "../../../../db/dbConfig";
import User from "../../../../models/userModels";
import bcryptjs from "bcryptjs";

// Call the connection function
connect();

// Define the request body type
interface RequestBody {
  username: string;
  email: string;
  password: string;
}

// Define the POST handler with appropriate types
export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const reqBody: RequestBody = await request.json();

    const { username, email, password } = reqBody;

    console.log(reqBody);

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password with bcryptjs
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user document
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);

    // Return a successful response
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
