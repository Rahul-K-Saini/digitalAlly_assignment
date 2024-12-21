import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const webDev = await prisma.course.create({
        data: {
            title: 'CBSE 9 Science'
        }
    })

    const dataScience = await prisma.course.create({
        data: {
            title: 'CBSE 9 Math'
        }
    })

    const students = [
        { name: 'Bansi Patel', courses: [webDev.id] },
        { name: 'Devang Dave', courses: [webDev.id, dataScience.id] },
        { name: 'Forum Bhatt', courses: [dataScience.id], status: 'Inactive' },
        { name: 'Riya Shah', courses: [webDev.id] },
        { name: 'Amit Patel', courses: [webDev.id, dataScience.id] },
        { name: 'Priya Mehta', courses: [dataScience.id] },
        { name: 'Jay Desai', courses: [webDev.id] },
        { name: 'Neha Singh', courses: [webDev.id, dataScience.id] },
        { name: 'Raj Kumar', courses: [dataScience.id], status: 'Inactive' },
        { name: 'Meera Patel', courses: [webDev.id] },
        { name: 'Arjun Shah', courses: [dataScience.id] },
        { name: 'Kavita Joshi', courses: [webDev.id, dataScience.id] },
        { name: 'Vikram Singh', courses: [webDev.id] },
        { name: 'Pooja Dave', courses: [dataScience.id], status: 'Inactive' },
        { name: 'Rahul Mehta', courses: [webDev.id, dataScience.id] },
        { name: 'Anjali Patel', courses: [webDev.id] },
        { name: 'Kunal Shah', courses: [dataScience.id] },
        { name: 'Maya Desai', courses: [webDev.id, dataScience.id] },
        { name: 'Arun Kumar', courses: [webDev.id] },
        { name: 'Divya Sharma', courses: [dataScience.id], status: 'Inactive' },
        { name: 'Nikhil Patel', courses: [webDev.id, dataScience.id] },
        { name: 'Shreya Mehta', courses: [webDev.id] },
        { name: 'Rohan Dave', courses: [dataScience.id] },
        { name: 'Anita Singh', courses: [webDev.id, dataScience.id] },
        { name: 'Deepak Shah', courses: [webDev.id] },
        { name: 'Sneha Patel', courses: [dataScience.id], status: 'Inactive' },
        { name: 'Karan Desai', courses: [webDev.id, dataScience.id] },
        { name: 'Nisha Kumar', courses: [webDev.id] },
        { name: 'Rajesh Mehta', courses: [dataScience.id] },
        { name: 'Sonal Shah', courses: [webDev.id, dataScience.id] }
    ]

    for (const student of students) {
        await prisma.student.create({
            data: {
                name: student.name,
                cohort: '2024-25',
                status: student.status || 'Active',
                courses: {
                    connect: student.courses.map(id => ({ id }))
                }
            }
        })
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })