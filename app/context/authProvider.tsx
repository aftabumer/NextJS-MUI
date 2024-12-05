// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   FC,
//   useEffect,
//   useCallback,
// } from "react";
// import axiosInterceptorInstance from "../lib/axiosInstance";
// import { notFound, useRouter } from "next/navigation";

// interface UserContextType {
//   user: User | null;
//   userRoutes: UserRoute[];
//   setUser: (user: User | null) => void;
//   setUserRoutes: (routes: UserRoute[]) => void;
//   // fetchUser: () => void;
// }

// // Create UserContext
// const UserContext = createContext<UserContextType | undefined>(undefined);

// // Define UserProvider component
// const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [userRoutes, setUserRoutes] = useState<UserRoute[]>([]);
//   const router = useRouter();

//   const fetchUser = useCallback(async () => {
//     try {
//       const response = await axiosInterceptorInstance.get("/api/user/details");
//       const userData = response.data.data;
//       setUser(userData.user_details);
//       setUserRoutes(userData.user_routes);
//     } catch (error) {
//       console.error("Failed to fetch user", error);
//       setUser(null);
//       setUserRoutes([]);
//       localStorage.clear();
//       router.push("/login");
//     }
//   }, []);

//   useEffect(() => {
//     console.log("hereone");
//     if (localStorage.getItem("token")) {
//       if (!user && !userRoutes?.length) {
//         fetchUser();
//       }
//     }
//   }, [router, user, userRoutes?.length]);

//   return (
//     <UserContext.Provider value={{ user, userRoutes, setUser, setUserRoutes }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Create useUser hook
// const useUser = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };

// export { UserProvider, useUser };
// export type { User };
