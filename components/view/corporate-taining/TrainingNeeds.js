const cards = [
    {
        id: 1,
        title: "Card Title 1",
        description: "On-Premise Classroom Training.",
        image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1745936891/img/onprimlearn.svg",
    },
    {
        id: 2,
        title: "Card Title 2",
        description: "Instructor-Led Live, Online Training",
        image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1745936891/img/inst-led.svg",
    },
    {
        id: 3,
        title: "Card Title 3",
        description: "Self-Paced Online Training",
        image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1745936891/img/selfpaced.svg",
    },
    {
        id: 4,
        title: "Card Title 4",
        description: "Blended Training",
        image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1745936891/img/hybrid-learn.svg",
    },
];

function TrainingNeeds() {

    return (
        <div className="bg-white  mb-5 p-3">
            <div className="mx-auto max-w-7xl text-center">

                <h1 className="text-2xl text-gray-500 font-bold">Designed for all your training needs</h1>

                <main className="p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                       
                        {cards?.map(({title, description ,image,id}) =>{ 
                           return <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden p-2">
                                <img src={image} alt={title} className="w-full h-48" />
                                <div className="p-4">
                                    <h2 className="text-gray-600">{description}</h2>
                                </div>
                            </div>
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
}
export default TrainingNeeds;