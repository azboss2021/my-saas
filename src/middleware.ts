import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// EDIT THIS
export const config = {
  matcher: ["/dashboard", "/account", "/billing", "/pro"],
};
