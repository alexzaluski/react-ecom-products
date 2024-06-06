import Card from "./Card";

const HomeCards = () => {
  return (
    // <!-- Developers and Employers -->
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Customers</h2>
            <p className="mt-2 mb-4">Browse our products and start relaxing</p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse All Products
            </a>
          </Card>
          <Card bg="bg-cyan-800">
            <h2 className="text-2xl font-bold">For Admin</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Product
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
