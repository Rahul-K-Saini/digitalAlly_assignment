"use client";
import { useActionState } from "react";
import { addStudent } from "./action";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Course = {
  id: number;
  title: string;
};

export function AddStudentForm({
  isOpen,
  setIsOpen,
  isEdit,
  studentData,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isEdit: boolean;
  studentData: any;
}) {
  const [state, addStudentAction, pending] = useActionState(
    addStudent,
    undefined
  );

  const courses: Course[] = [
    { id: 1, title: "CBSE 9 Science" },
    { id: 2, title: "CBSE 10 Science" },
    { id: 3, title: "CBSE 9 Math" },
    { id: 4, title: "CBSE 10 Math" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-full sm:max-w-[425px] p-4 sm:p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl">
            {isEdit ? "Edit Student" : "Add New Student"}
          </DialogTitle>
          {state && state?.success && (
            <small className="text-green-500 block">
              Student {isEdit ? "Updated" : "Added"} Successfully
            </small>
          )}
          {state?.error && (
            <small className="text-red-500 block">Failed to add student</small>
          )}
        </DialogHeader>
        <form action={addStudentAction} className="space-y-4 mt-4">
          <input
            type="text"
            defaultValue={studentData ? studentData?.id : null}
            name="id"
            className="hidden"
          />
          <div className="grid gap-3">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                defaultValue={isEdit ? studentData?.name : ""}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cohort" className="text-sm font-medium">Cohort</Label>
              <Select
                name="cohort"
                defaultValue={isEdit ? studentData?.cohort : undefined}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select cohort" />
                </SelectTrigger>
                <SelectContent className="max-h-48">
                  {["2024-25", "2025-26", "2026-27", "2027-28", "2028-29"].map(
                    (year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="text-sm font-medium">Course</Label>
              <Select
                name="course"
                defaultValue={isEdit ? studentData?.courses[0].title : undefined}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent className="max-h-48">
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.title}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status" className="text-sm font-medium">Status</Label>
              <Select
                name="status"
                defaultValue={isEdit ? studentData?.status : undefined}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={pending} 
            className="w-full mt-6"
          >
            {isEdit ? "Update Student" : "Add Student"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}