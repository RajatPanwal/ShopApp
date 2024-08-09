import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products/1";
  const [loading, setLoading] = useState(false);

  // all data is stored in post variable
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      const result = await fetch(API_URL);
      const data = await result.json();

      setPosts(data);
    }
    catch(error){
      console.log("Error in api")
      setPosts([])
    }
    setLoading(false);
  }

  // api called on first render
  useEffect( () => {
    fetchProductData();
  }, [])

  return (
    <div className=" bg-[#FAFAFA] mt-[80px] ">
      {
        loading ? <Spinner/> : 
        posts.length > 0 ?
        (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {posts.map( (post) => (
              <Product key={post.id} post={post}/>
            ))}
          </div>
        ) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      }
    </div>
  );
};

export default Home;
