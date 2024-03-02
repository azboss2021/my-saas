import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const userExist = await prisma.user.findFirst({
      where: { email: body.profile?.email },
    });

    if (!userExist) {
      const newUser = await prisma.user.create({
        data: {
          username: body.user?.name as string,
          email: body.user?.email as string,
          image: body.user?.image as string,
        },
      });

      return Response.json({ newUser }, { status: 201 });
    } else {
      throw Error("User already exists");
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
