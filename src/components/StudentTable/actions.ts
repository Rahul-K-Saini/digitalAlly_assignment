"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteStudent(id: string | undefined) {
    const res = await prisma.student.delete({
        where: {
            id: id
        }
    });
    revalidatePath("/")
    return res;
}
