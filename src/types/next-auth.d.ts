import "next-auth";

declare module "next-auth" {
  interface User {
    role: "admin" | "customer";
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: "admin" | "customer";
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "admin" | "customer";
    id: string;
  }
}
