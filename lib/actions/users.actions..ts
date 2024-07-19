// "use server";

// import { ID, Query } from "node-appwrite";
// import { users, account } from "../appwrite.config";

// export const createUser = async ({
//   email,
//   name,
//   password,
//   phoneNumber,
// }: {
//   email: string;
//   name: string;
//   password: string;
//   phoneNumber: string;
// }) => {
//   try {
//     // const newUser = await users.create(ID.unique(), email, phoneNumber, name);
//     // console.log({ newUser });

//     const results = await account.create(ID.unique(), email, password, name);
//     console.log(results);
//   } catch (error: any) {
//     if (error && error?.code === 400) {
//       const documents = await users.list([Query.equal("email", [email])]);
//       console.log(documents?.users[0]);
//       return documents?.users[0];
//     }
//   }
// };
