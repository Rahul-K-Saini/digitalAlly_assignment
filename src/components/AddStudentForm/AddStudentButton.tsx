"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { AddStudentForm } from ".";

export function AddStudentButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="secondary"
        className="bg-gray-200 px-4 py-4 hover:bg-gray-300"
      >
        <Plus className="mr-2 h-4 w-4" /> Add new Student
      </Button>
      <AddStudentForm isOpen={isOpen} setIsOpen={setIsOpen} isEdit={false} studentData={null} />
    </>
  );
}
