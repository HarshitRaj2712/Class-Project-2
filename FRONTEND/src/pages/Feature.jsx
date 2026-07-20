import React from 'react'
import Card from './Card';
const courses = [
  {
    id: 1,
    title: "Complete MERN Stack Development",
    instructor: "Om Jaiswal",
    price: 499,
    duration: "45 Hours",
    level: "Beginner",
    image: "https://picsum.photos/300/200?1",
  },
  {
    id: 2,
    title: "React.js From Scratch",
    instructor: "Rahul Sharma",
    price: 599,
    duration: "30 Hours",
    level: "Beginner",
    image: "https://picsum.photos/300/200?2",
  },
  {
    id: 3,
    title: "Node.js & Express.js",
    instructor: "John Doe",
    price: 699,
    duration: "28 Hours",
    level: "Intermediate",
    image: "https://picsum.photos/300/200?3",
  },
  {
    id: 4,
    title: "MongoDB Masterclass",
    instructor: "Ankit Verma",
    price: 549,
    duration: "22 Hours",
    level: "Intermediate",
    image: "https://picsum.photos/300/200?4",
  },
  {
    id: 5,
    title: "JavaScript Interview Preparation",
    instructor: "Priya Singh",
    price: 799,
    duration: "35 Hours",
    level: "Advanced",
    image: "https://picsum.photos/300/200?5",
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    instructor: "Aman Gupta",
    price: 999,
    duration: "60 Hours",
    level: "Intermediate",
    image: "https://picsum.photos/300/200?6",
  },
  {
    id: 7,
    title: "Python Programming Bootcamp",
    instructor: "Neha Kapoor",
    price: 649,
    duration: "40 Hours",
    level: "Beginner",
    image: "https://picsum.photos/300/200?7",
  },
  {
    id: 8,
    title: "Java Programming Masterclass",
    instructor: "Rohit Sharma",
    price: 749,
    duration: "42 Hours",
    level: "Intermediate",
    image: "https://picsum.photos/300/200?8",
  },
  {
    id: 9,
    title: "HTML & CSS Complete Guide",
    instructor: "Simran Kaur",
    price: 399,
    duration: "18 Hours",
    level: "Beginner",
    image: "https://picsum.photos/300/200?9",
  },
  {
    id: 10,
    title: "TypeScript for React Developers",
    instructor: "Aditya Mehta",
    price: 699,
    duration: "26 Hours",
    level: "Intermediate",
    image: "https://picsum.photos/300/200?10",
  },
  {
    id: 11,
    title: "Next.js Full Course",
    instructor: "Karan Malhotra",
    price: 899,
    duration: "36 Hours",
    level: "Advanced",
    image: "https://picsum.photos/300/200?11",
  },
  {
    id: 12,
    title: "Git & GitHub Essentials",
    instructor: "Sneha Patil",
    price: 299,
    duration: "12 Hours",
    level: "Beginner",
    image: "https://picsum.photos/300/200?12",
  },
];
const Feature = () => {
  return (
    <>
        <h2 className="text-3xl font-bold text-center py-6   ">
        Courses
      </h2>
      <div className='flex flex-row flex-wrap gap-4 justify-around items-center '>
        {courses.map((c)=>{
          return(
            <Card key={c.id}
            id={c.id} title={c.title} instructor={c.instructor} price={c.price} duration={c.duration} level={c.level} image={c.image} />
          )
        })}
        
    </div>
    </>
  )
}

export default Feature