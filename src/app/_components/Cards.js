import React from 'react';
import { CardContainer,CardBody, CardItem } from '../components/ui/3d-card';
import Image from "next/image";
import Item from '../_components/Item';
import { useSelector } from "react-redux";




const Cards = ({foodItems}) => {
  const { userData } = useSelector((state) => state?.auth);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 mt-36">
    {foodItems &&
      foodItems?.map((item) => (
        <React.Fragment key={item._id}>
          <CardContainer className="inter-var w-full sm:w-[20rem] lg:w-[16rem] md:w-[16rem]">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[22 rem] rounded-xl border flex flex-col justify-center items-center">
            <CardItem
                translateZ="100"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                }}
              >
                <Image
                  src={item.image}
                  className="object-cover rounded-xl group-hover:shadow-xl"
                  fill
                //   layout={'fill'}
                //   objectFit={'contain'}
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold dark:text-white"
              >
                Delicious {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
               <Item
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                restoId={item.restoId}  
                userId={userData?._id}
               />
              </div>
            </CardBody>
          </CardContainer>
        </React.Fragment>
      ))}
  </div>
  )
}

export default Cards
