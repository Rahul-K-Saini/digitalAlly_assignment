import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import Image from "next/image";
import { Actions } from "./client-side-buttons";

export async function StudentTable() {
  const students = await prisma.student.findMany({
    include: {
      courses: true,
    },
    orderBy: {
      dateJoined: "desc",
    },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-4">Student Name</TableHead>
          <TableHead>Cohort</TableHead>
          <TableHead>Courses</TableHead>
          <TableHead>Date Joined</TableHead>
          <TableHead>Last login</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-medium pl-4">{student.name}</TableCell>
            <TableCell>{`AY ${student.cohort}`}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                {student.courses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center gap-1 bg-slate-100 md:px-2 md:py-1 px-0.5 py-0.5 rounded-md md:text-sm text-xs "
                  >
                    {course.title.includes("Science") ? (
                      <Image
                      className="w-10"
                        width={30}
                        height={30}
                        alt="boy-image"
                        src="/boy.webp"
                      />
                    ) : (
                      <Image
                        width={30}
                        height={30}
                        alt="girl-image"
                        src="/girl.webp"
                      />
                    )}
                    {course.title}
                  </div>
                ))}
              </div>
            </TableCell>
            <TableCell>
              {new Date(student.dateJoined).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </TableCell>
            <TableCell>
              {new Date(student.lastLogin).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TableCell>
            <TableCell>
              <div
                className={`h-3 ml-4 w-3 rounded-full ${
                  student.status.toLowerCase() === "active"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              />
            </TableCell>
            <TableCell className="flex mt-2 gap-2 items-center justify-center">
              <Actions student={student}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
