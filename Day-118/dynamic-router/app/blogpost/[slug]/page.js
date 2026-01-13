import Error from "@/app/error";
import NotFound from "@/app/not-found";


export default async function Page({ params }) {
    // throw console.error("Error haiiiiiiiiiiiiii");
    
    const { slug } = await params
    // fetch your blog post by its slug 
    let languages = ["python", "java", "C++", "javascript", "typescript"];
    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    else {
        return NotFound();
    }

    return <div>My Post: {slug}</div>
}