

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const addService = { name, image, price, description }
        form.reset();

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }


    return (
        <div className="flex flex-col w-1/3 mx-auto p-6 rounded-md sm:p-10 bg-gray-300 text-gray-800 mb-12">
            <h1 className="mb-8 text-4xl font-bold text-center">Add Service</h1>
            <form onSubmit={handleAddService} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">

                    <input type="text" name="name" placeholder="Service name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />

                    <input type="text" name="image" placeholder="image url" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />

                    <input type="text" name="price" placeholder="Price" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />

                    <input type="text" name="description" placeholder="Service Description" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                </div>
                <div className="space-y-2">
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50" >Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;