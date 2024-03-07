const Success = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold mt-16">
          {" "}
          Inspirational Success Stories
        </h2>
        <p className="italic">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque, ut
          illo quaerat nostrum facere nemo odit reiciendis nisi consequatur.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="text-center space-y-2 bg-gradient-to-t from-orange-200 p-4 rounded border border-pink-900">
          <img src="https://i.ibb.co/Fw4BFvy/art-1.jpg" alt="" />
          <p className="text-xl font-bold">Julia Smith</p>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, ut!
          </p>
          <button className="btn btn-sm border-0 bg-gradient-to-b from-base-200 to-pink-500">
            More
          </button>
        </div>

        <div className="text-center space-y-2 bg-gradient-to-t from-orange-200 p-4 rounded border border-pink-900">
          <img src="https://i.ibb.co/X5Y4hxH/art-11.jpg" alt="" />
          <p className="text-xl font-bold">Lima Watson</p>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, ut!
          </p>
          <button className="btn btn-sm border-0 bg-gradient-to-b from-base-200 to-pink-500">
            More
          </button>
        </div>
        <div className="text-center space-y-2 bg-gradient-to-t from-orange-200 p-4 rounded border border-pink-900">
          <img src="https://i.ibb.co/W3NxX7B/art-12.jpg" alt="" />
          <p className="text-xl font-bold">Harry Patterson</p>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, ut!
          </p>
          <button className="btn btn-sm border-0 bg-gradient-to-b from-base-200 to-pink-500">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
