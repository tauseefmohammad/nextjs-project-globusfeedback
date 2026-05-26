import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";


export async function syncCurrentUser(){
    try {
        //Get user data from clerk
        const clerkUser = await currentUser();

        if(!clerkUser){
            return null
        }

        const email = clerkUser.emailAddresses[0]?.emailAddress

        if(!email){
            throw new Error("User eamil not found")
        }
        //checking if user exixts in DB
        let dbUser =await prisma.user.findUnique({
            where: {clerkUserId: clerkUser.id}
        })
        if(dbUser) {
            //Updating existing user in DB
            dbUser = await prisma.user.update({
                where: {id: dbUser.id},
                data:{
                    email,
                    name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
                    image: clerkUser.imageUrl
                }
            })
        } else {
            // creating a new user in DB if user doesnt exist
            // Also checking if this is the first user - to make that user admin
            const userCount = await prisma.user.count();
            const isFirstUser = userCount === 0;

            dbUser = await prisma.user.create({
                data: {
                    clerkUserId :  clerkUser.id,
                    email,
                    name : `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
                    image: clerkUser.imageUrl,
                    role: isFirstUser ? "admin" : "user"
                },
            });
            console.log(`New user created: ${email} with role: ${dbUser.role}`);
         }
         return dbUser;

    } catch(error){
        console.log("Error syncing user from Clerk:", error);
    }
}