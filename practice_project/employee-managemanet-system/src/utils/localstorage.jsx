const employees = [
    {
        id: 1,
        firstname: "Aarav",
        email: "e@e.com",
        password: "123",
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Fix login bug",
                description: "Resolve issue with user login authentication",
                date: "2026-03-30",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Update dashboard UI",
                description: "Improve dashboard layout and responsiveness",
                date: "2026-03-25",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "API integration",
                description: "Integrate third-party payment API",
                date: "2026-03-20",
                category: "Backend"
            }
        ]
    },
    {
        id: 2,
        firstname: "Vihaan",
        email: "e2@e.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },  
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create landing page",
                description: "Design and develop landing page",
                date: "2026-03-29",
                category: "Frontend"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Optimize images",
                description: "Reduce image sizes for faster loading",
                date: "2026-03-28",
                category: "Performance"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix navbar",
                description: "Resolve responsive navbar issues",
                date: "2026-03-22",
                category: "UI/UX"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "SEO setup",
                description: "Implement SEO best practices",
                date: "2026-03-18",
                category: "Marketing"
            }
        ]
    },
    {
        id: 3,
        firstname: "Aditya",
        email: "e3@e.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Database design",
                description: "Design schema for new project",
                date: "2026-03-31",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Write API docs",
                description: "Document REST APIs",
                date: "2026-03-27",
                category: "Documentation"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Unit testing",
                description: "Write tests for modules",
                date: "2026-03-26",
                category: "Testing"
            }
        ]
    },
    {
        id: 4,
        firstname: "Kabir",
        email: "employee4@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Setup CI/CD",
                description: "Configure deployment pipeline",
                date: "2026-03-30",
                category: "DevOps"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix bugs",
                description: "Resolve reported bugs",
                date: "2026-03-24",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Server config",
                description: "Configure production server",
                date: "2026-03-21",
                category: "DevOps"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Code review",
                description: "Review team pull requests",
                date: "2026-03-29",
                category: "Development"
            }
        ]
    },
    {
        id: 5,
        firstname: "Rohan",
        email: "employee5@example.com",
        password: "123",
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Client meeting",
                description: "Discuss requirements with client",
                date: "2026-03-31",
                category: "Management"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Prepare report",
                description: "Create monthly performance report",
                date: "2026-03-26",
                category: "Reporting"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Team coordination",
                description: "Coordinate with dev team",
                date: "2026-03-28",
                category: "Management"
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employeesdata = JSON.parse(localStorage.getItem('employees'))
    const admindata = JSON.parse(localStorage.getItem('admin'))
    return { employeesdata, admindata }
}
