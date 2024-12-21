"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addStudent(previousState: unknown | undefined, formData: FormData) {
    try {
        const id = formData.get("id") as string;
        const name = formData.get('name') as string;
        const cohort = formData.get('cohort') as string;
        const status = formData.get('status') as string;
        const coursename = formData.get('course') as string;
        
        const course = await prisma.course.findFirst({
            where: {
                title: coursename
            }
        });

        if (!course) {
            throw new Error(`Course "${coursename}" not found`);
        }

        let res;
        if (id) {
            // Update existing student
            res = await prisma.student.update({
                where: { id },
                data: {
                    name,
                    cohort,
                    status,
                    courses: {
                        connect: [{ id: course.id }]
                    }
                }
            });
        } else {
            // Create new student
            res = await prisma.student.create({
                data: {
                    name,
                    cohort,
                    status,
                    courses: {
                        connect: [{ id: course.id }]
                    }
                }
            });
        }

        revalidatePath("/")
        return { success: true, data: res };

    } catch (error) {
        console.error('Error managing student:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to manage student'
        };
    }
}