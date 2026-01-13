export default async function Page({ params }) {
    const slug  = await params
    
    console.log(slug);
    // fetch your blog post by its slug 

    return <div>I am about page check console</div>
}