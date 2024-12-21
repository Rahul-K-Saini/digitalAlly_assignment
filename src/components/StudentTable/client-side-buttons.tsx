"use client";
import { Pencil, Trash } from "lucide-react";
import { deleteStudent } from "./actions";
import { useState } from "react";
import { AddStudentForm } from "../AddStudentForm";

export function Actions({ student }: any) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const handleDelete = () => {
        deleteStudent(student.id);
    };

    const handleEdit = () => {
        setIsOpen(true);
    };

    return (
        <>
            <AddStudentForm 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                isEdit={true}
                studentData={student} 
            />
            <Pencil onClick={handleEdit} size={20} color="blue" /> 
            <Trash onClick={handleDelete} color="red" size={20} /> 
        </>
    );
}
