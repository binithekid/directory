// pages/[name]/index.js
import { useRouter } from "next/router";
import { dataList } from "@/data/dataList";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import Link from "next/link";
import { HiOutlineHashtag } from "react-icons/hi";
import Card from "@/components/Card";
import { PiStarFill } from "react-icons/pi";
import { FaCodeFork } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Item = ({ item, relatedItems }) => {
  const router = useRouter();

  // Fallback rendering for when the data is not ready
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
      className="w-full py-8 min-h-screen gap-10 flex md:flex-row flex-col md:px-40 px-4"
    >
      <div className="flex flex-col w-2/3 gap-3">
        <div className="flex flex-row gap-3 items-center">
          <div className="logo-container-page bg-white border p-2 rounded shadow-sm flex">
            <div
              className="logo-image"
              style={{
                backgroundImage: `url(${item.logo})`,
              }}
            ></div>
          </div>
          <h1 className="text-4xl text-gray-800 font-semibold tracking-tight">
            {item?.name}
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray-700 tracking-tight">
            {item?.description}
          </p>
          <Link href={item?.Website} target="_blank" rel="noopener noreferrer">
            <button className="w-max text-sm py-2 transition-all text-white flex flex-row items-center gap-2 hover:opacity-80 bg-black px-4 rounded">
              Visit Website <GoArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="py-4">
          <img src={item?.image} className="border rounded-lg object-cover" />
        </div>
        <p className="text-base text-gray-700 tracking-tight">{item.content}</p>
        <div className="py-4">
          <p className="text-base text-gray-700 tracking-tight">{`Key benefits of ${item.name} include:`}</p>
          <ul className="py-2 list-disc text-gray-700 pl-6">
            {item?.benefits.map((benefit, index) => (
              <li
                className="py-1"
                key={index}
                dangerouslySetInnerHTML={{ __html: benefit }}
              ></li>
            ))}
          </ul>
        </div>

        <div className="flex md:flex-row text-gray-700 flex-col py-2">
          <div className="w-1/2">
            <h1 className="font-semibold text-2xl">Links:</h1>
            <div className="py-2 list-disc text-gray-700">
              {item?.link.map((linkItem, index) => {
                const [text, url] = Object.entries(linkItem)[0];
                return (
                  <p
                    className="flex py-1 flex-row items-center gap-1 transition-all hover:opacity-50"
                    key={index}
                  >
                    <IoMdLink className="text-gray-400 mr-1 text-lg" />
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      {text}
                    </Link>
                    <GoArrowUpRight className="text-gray-400 text-sm mt-1" />
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-2xl">Categories:</h1>
            <div className="py-2 list-disc text-gray-700">
              <p className="flex py-1 flex-row items-center gap-1">
                <FaCodeFork className="text-gray-400 mr-1 text-lg" />{" "}
                {item?.category}
              </p>
            </div>
          </div>
        </div>

        <div className="flex text-gray-700 gap-2 flex-col py-4">
          <h1 className="font-semibold text-2xl">Related topics:</h1>
          <div className="flex flex-row flex-wrap gap-2">
            {item?.related.map((item, index) => (
              <p key={index} className="flex flex-row items-center">
                <HiOutlineHashtag className="text-gray-400" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-2 text-gray-700 flex-col py-6">
          <h1 className="font-semibold text-2xl">{`Similar Alternatives to ${item?.name}:`}</h1>
          <div className="py-2 flex flex-row gap-4">
            {relatedItems?.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/3 p-5 h-max border border-gray-200 rounded-lg bg-white">
        <p className="text-gray-700 font-medium">Product Details:</p>
        <div className="flex text-sm flex-col gap-2 pt-3">
          <div className="flex flex-row items-center">
            <p className="text-gray-500 tracking-tight flex flex-row items-center gap-1">
              <FaCodeFork className="text-sm" />
              Category
            </p>
            <hr className="flex-grow mx-3 border-gray-100" />
            <p className="text-gray-700 tracking-tight">{item?.category}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-gray-500 tracking-tight flex flex-row items-center gap-1">
              <MdOutlineUpdate /> Added
            </p>
            <hr className="flex-grow mx-3 border-gray-100" />
            <p className="text-gray-700 w-max tracking-tight">{item?.date}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-gray-500 tracking-tight flex flex-row items-center gap-1">
              <PiStarFill />
              Rating
            </p>
            <hr className="flex-grow mx-3 border-gray-100" />

            <div className="flex flex-row gap-1 items-center">
              <p className="text-gray-700 tracking-tight">{item?.rating} / 5</p>
            </div>
          </div>
        </div>{" "}
        <p className="text-gray-700 font-medium pt-8">Repository Details:</p>
        <div className="flex flex-col gap-2 pt-3">
          {item?.technology.map((item, index) => (
            <div
              key={index}
              className="flex flex-row text-sm items-center gap-2"
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-gray-500">{item?.name}</p>
              <p className="text-gray-500">({item?.percentage}%)</p>
            </div>
          ))}
        </div>{" "}
        <button className="w-max mt-6 border rounded-lg text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 flex flex-row gap-2 items-center px-4 py-2 text-sm">
          <FiGithub />
          View Repository
        </button>
      </div>
    </motion.div>
  );
};

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on items
  const paths = dataList.map((item) => ({
    params: { name: item.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the item using params.name
  const item = dataList.find((item) => item.name === params.name);

  // If no item is found, return 404 page
  if (!item) {
    return {
      notFound: true,
    };
  }

  const relatedItems = dataList
    .filter(
      (relatedItem) =>
        relatedItem.category === item.category && relatedItem.name !== item.name
    )
    .slice(0, 2);

  // Pass item data to the page via props
  return { props: { item, relatedItems } };
}

export default Item;
