import { NextResponse } from "next/server";
import { connect } from "../../../../db/dbConfig";
import User from "../../../../models/userModels";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Calling the connect function to build the connection
connect();

// Interface for the request body
interface RequestBody {
  email: string;
  password: string;
}

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const reqBody: RequestBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Create a token for the user
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      loggedIn: true,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET as string, {
      expiresIn: "1d",
    });

    // Include user data in the response
    const response = NextResponse.json({
      message: "Logged In Success",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        loggedIn: true,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
